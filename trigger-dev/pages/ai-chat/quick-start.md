> Pinned source for Trigger.dev v4.7.3: [docs/ai-chat/quick-start.mdx](https://github.com/triggerdotdev/trigger.dev/blob/10b9960d5a45cfb323cfc48a157e3cb8d481339c/docs/ai-chat/quick-start.mdx)
> Canonical documentation: https://trigger.dev/docs/ai-chat/quick-start

# Quick Start

Define an agent, authorize chat sessions on your server, and stream responses into a React frontend.

These steps assume you already have a Trigger.dev project with the SDK installed and the CLI authenticated — if you don't, follow [Manual setup](https://trigger.dev/docs/manual-setup) (or `npx trigger.dev@latest init` in an existing project) first. You should be able to run `pnpm exec trigger dev` from your project root before continuing.

The chat surface works with Vercel AI SDK **v5, v6, or v7**; install whichever major you want. On **v7**, also install `@ai-sdk/otel` so your model calls are traced (the SDK registers it for you). See [compatibility](https://trigger.dev/docs/ai-chat/reference#compatibility) for the full matrix.

1. Use `chat.agent` from `@trigger.dev/sdk/ai` to define an agent that handles chat messages. The `run` function receives `ModelMessage[]` (already converted from the frontend's `UIMessage[]`) — pass them directly to `streamText`.

   If you return a `StreamTextResult`, it's **automatically piped** to the frontend.

   ```ts trigger/chat.ts
   import { chat } from "@trigger.dev/sdk/ai";
   import { stepCountIs } from "ai";
   import { anthropic } from "@ai-sdk/anthropic";

   export const myChat = chat.agent({
     id: "my-chat",
     run: async ({ messages, signal, streamText }) => {
       return streamText({
         model: anthropic("claude-sonnet-4-5"),
         messages,
         abortSignal: signal,
         stopWhen: stepCountIs(15),
       });
     },
   });
   ```

   > **Note**
   >
   > The `streamText` passed to `run` connects compaction, steering, background
   > injection, and telemetry. If you use an imported `streamText` from `ai`,
   > spread `chat.toStreamTextOptions()` into its options to connect those features.

   > **Tip**
   >
   > For a **custom** [`UIMessage`](https://sdk.vercel.ai/docs/reference/ai-sdk-core/ui-message) subtype (typed `data-*` parts, tool map, etc.), define the agent with [`chat.withUIMessage<...>().agent({...})`](https://trigger.dev/docs/ai-chat/types) instead of `chat.agent`.
2. On your server (e.g. as Next.js server actions), expose two helpers the transport will call: one that creates the chat session, and one that mints a fresh session-scoped access token for refresh.

   ```ts app/actions.ts
   "use server";

   import { auth } from "@trigger.dev/sdk";
   import { chat } from "@trigger.dev/sdk/ai";
   import { requireChatOwner } from "@/lib/chat-access";

   const startSession = chat.createStartSessionAction("my-chat");

   export async function startChatSession({ chatId }: { chatId: string }) {
     await requireChatOwner(chatId);
     return startSession({ chatId });
   }

   // The transport calls this on 401/403 to refresh the session token.
   export async function mintChatAccessToken(chatId: string) {
     await requireChatOwner(chatId);
     return auth.createPublicToken({
       scopes: {
         read: { sessions: chatId },
         write: { sessions: chatId },
       },
       expirationTime: "1h",
     });
   }
   ```

   `requireChatOwner` is your application helper: authenticate the request, load the chat by ID and owner, and throw if it doesn't belong to that user. Create the chat record on your server before rendering the frontend, and pass its ID into `Chat`. Check ownership in both actions, including token refresh.

   Set `TRIGGER_SECRET_KEY` and your model provider key in the server and worker environments. Keep both keys out of the browser.
3. Use the `useTriggerChatTransport` hook from `@trigger.dev/sdk/chat/react` to create a memoized transport instance, then pass it to `useChat`. Wire both server actions into the transport's `accessToken` and `startSession` callbacks.

   The example below uses the Next.js `@/*` path alias for imports from `@/trigger/chat` and `@/app/actions`. If you're not using Next.js (or haven't configured the alias), swap them for relative imports.

   ```tsx app/components/chat.tsx
   "use client";

   import { useState } from "react";
   import { useChat } from "@ai-sdk/react";
   import { useTriggerChatTransport } from "@trigger.dev/sdk/chat/react";
   import type { myChat } from "@/trigger/chat";
   import { mintChatAccessToken, startChatSession } from "@/app/actions";

   export function Chat({ chatId }: { chatId: string }) {
     const transport = useTriggerChatTransport<typeof myChat>({
       task: "my-chat",
       accessToken: ({ chatId }) => mintChatAccessToken(chatId),
       startSession: ({ chatId }) => startChatSession({ chatId }),
     });

     const { messages, sendMessage, stop, status, error } = useChat({ id: chatId, transport });
     const [input, setInput] = useState("");

     return (
       <div>
         {messages.map((m) => (
           <div key={m.id}>
             <strong>{m.role}:</strong>
             {m.parts.map((part, i) =>
               part.type === "text" ? <span key={i}>{part.text}</span> : null
             )}
           </div>
         ))}

         {error && <p role="alert">{error.message}</p>}

         <form
           onSubmit={(e) => {
             e.preventDefault();
             if (input.trim()) {
               sendMessage({ text: input });
               setInput("");
             }
           }}
         >
           <input
             value={input}
             onChange={(e) => setInput(e.target.value)}
             placeholder="Type a message..."
           />
           <button type="submit" disabled={status === "streaming" || status === "submitted"}>
             Send
           </button>
           {status === "streaming" && (
             <button type="button" onClick={stop}>
               Stop
             </button>
           )}
         </form>
       </div>
     );
   }
   ```

## Try it

Run your frontend and `pnpm exec trigger dev`, then send a message. You should see an assistant response stream into the page and a run in your project's dashboard. If session creation fails, check ownership and the server's `TRIGGER_SECRET_KEY`. If the run starts but the model fails, check the worker's provider key and run logs.

## Next steps

- [Backend](https://trigger.dev/docs/ai-chat/backend) — Lifecycle hooks, persistence, session iterator, raw task primitives
- [Tools](https://trigger.dev/docs/ai-chat/tools): Declare tools so `toModelOutput` survives across turns, typed in `run()`
- [Frontend](https://trigger.dev/docs/ai-chat/frontend) — Session management, client data, reconnection
- [Types](https://trigger.dev/docs/ai-chat/types) — `chat.withUIMessage`, `InferChatUIMessage`, and related typing
- [`chat.local`](https://trigger.dev/docs/ai-chat/chat-local) — Per-run typed state across hooks, run, tools, subtasks
- [Sub-agents pattern](https://trigger.dev/docs/ai-chat/patterns/sub-agents) — Subtask-as-tool, `target: "root"` streaming, `ai.toolExecute` helpers
- [Background injection](https://trigger.dev/docs/ai-chat/background-injection) — `chat.inject()` and `chat.defer()` for between-turn work
