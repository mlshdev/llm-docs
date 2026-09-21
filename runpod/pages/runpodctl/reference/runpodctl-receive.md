> Pinned source for Runpod main: [runpodctl/reference/runpodctl-receive.mdx](https://github.com/runpod/docs/blob/4962c60abcb8d9bf359d92ccc07644abd5d8e610/runpodctl/reference/runpodctl-receive.mdx)
> Canonical documentation: https://docs.runpod.io/runpodctl/reference/runpodctl-receive

# receive

Receive files or folders through runpodctl using a secure peer-to-peer connection code shared by the sending machine.

Receive files or folders sent from another machine using a secure peer-to-peer connection established with a connection code.

```bash Command
runpodctl receive <code>
```

## Example

Receive files using a connection code:

```bash
runpodctl receive rainbow-unicorn-42
```

## Arguments

**\<code> (type: string; required)**

The connection code phrase that matches the code used by the sender with the [`send`](https://docs.runpod.io/runpodctl/reference/runpodctl-send) command.

## Related commands

- [`runpodctl send`](https://docs.runpod.io/runpodctl/reference/runpodctl-send)
