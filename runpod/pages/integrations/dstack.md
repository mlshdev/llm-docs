> Pinned source for Runpod main: [integrations/dstack.mdx](https://github.com/runpod/docs/blob/56a86f70b4ea8b225c0e5e2231e42a4925931686/integrations/dstack.mdx)
> Canonical documentation: https://docs.runpod.io/integrations/dstack

# Manage Pods with dstack on Runpod

Use dstack to automate Pod orchestration for AI and ML workloads on Runpod. Review configuration and usage guidance for this Runpod integration.

[dstack](https://dstack.ai/) is an open-source tool that automates Pod orchestration for AI and ML workloads. It lets you define your application and resource requirements in YAML files, then handles provisioning and managing cloud resources on Runpod so you can focus on your application instead of infrastructure.

This guide shows you how to set up dstack with Runpod and deploy [vLLM](https://github.com/vllm-project/vllm) to serve the `meta-llama/Llama-3.1-8B-Instruct` model from Hugging Face.

## Requirements

You'll need:

- [A Runpod account with an API key](https://docs.runpod.io/get-started/api-keys).
- Python 3.8 or higher installed on your local machine.
- `pip` (or `pip3` on macOS).
- Basic utilities like `curl`.

These instructions work on macOS, Linux, and Windows.

> **Note**
>
> **Windows users**
>
> Use [WSL (Windows Subsystem for Linux)](https://learn.microsoft.com/en-us/windows/wsl/install) or [Git Bash](https://gitforwindows.org/) to follow along with the Unix-like commands in this guide. Alternatively, use PowerShell or Command Prompt and adjust commands as needed.

## Set up dstack

### Install and configure the server

1. Open a terminal and create a new directory:

   ```bash
   mkdir runpod-dstack-tutorial
   cd runpod-dstack-tutorial
   ```
2. ```bash
   python3 -m venv .venv
   source .venv/bin/activate
   ```

   ```bash
   python3 -m venv .venv
   source .venv/bin/activate
   ```

   **Command Prompt:**

   ```bash
   python -m venv .venv
   .venv\Scripts\activate
   ```

   **PowerShell:**

   ```bash
   python -m venv .venv
   .venv\Scripts\Activate.ps1
   ```
3. Install dstack using `pip`:

   ```bash
   pip3 install -U "dstack[all]"
   ```

   ```bash
   pip install -U "dstack[all]"
   ```

   ```bash
   pip install -U "dstack[all]"
   ```

### Configure dstack for Runpod

1. Create a `config.yml` file in the dstack configuration directory. This file stores your Runpod credentials for all dstack deployments.

   - **Create the configuration directory:**

     ```bash
     mkdir -p ~/.dstack/server
     ```

     ```bash
     mkdir -p ~/.dstack/server
     ```

     ```bash
     mkdir %USERPROFILE%\.dstack\server
     ```

   - **Navigate to the configuration directory:**

     ```bash
     cd ~/.dstack/server
     ```

     ```bash
     cd ~/.dstack/server
     ```

     ```bash
     cd %USERPROFILE%\.dstack\server
     ```

   Create a file named `config.yml` with the following content:

   ```yml
   projects:
     - name: main
       backends:
         - type: runpod
           creds:
             type: api_key
             api_key: YOUR_RUNPOD_API_KEY
   ```

   Replace `YOUR_RUNPOD_API_KEY` with your actual Runpod API key.
2. Start the dstack server:

   ```bash
   dstack server
   ```

   You'll see output like this:

   ```bash
   [INFO] Applying ~/.dstack/server/config.yml...
   [INFO] The admin token is ADMIN-TOKEN
   [INFO] The dstack server is running at http://127.0.0.1:3000
   ```

   > **Note**
   >
   > Save the `ADMIN-TOKEN` to access the dstack web UI.
3. Open your browser and go to `http://127.0.0.1:3000`. Enter the `ADMIN-TOKEN` from the server output to access the web UI where you can monitor and manage deployments.

   ![](https://raw.githubusercontent.com/runpod/docs/56a86f70b4ea8b225c0e5e2231e42a4925931686/images/e96e09d1-dstack_webui-fab1ac1123c8d4ce9a0458569bd97260.png)

## Deploy vLLM

### Configure the deployment

1. Open a new terminal and navigate to your tutorial directory:

   ```bash
   cd runpod-dstack-tutorial
   ```

   Activate the Python virtual environment:

   ```bash
   source .venv/bin/activate
   ```

   ```bash
   source .venv/bin/activate
   ```

   **Command Prompt:**

   ```bash
   .venv\Scripts\activate
   ```

   **PowerShell:**

   ```bash
   .venv\Scripts\Activate.ps1
   ```
2. Create a new directory for the deployment:

   ```bash
   mkdir task-vllm-llama
   cd task-vllm-llama
   ```
3. Create a file named `.dstack.yml` with the following content:

   ```yml
   type: task
   name: vllm-llama-3.1-8b-instruct
   python: "3.10"
   env:
     - HUGGING_FACE_HUB_TOKEN=YOUR_HUGGING_FACE_HUB_TOKEN
     - MODEL_NAME=meta-llama/Llama-3.1-8B-Instruct
     - MAX_MODEL_LEN=8192
   commands:
     - pip install vllm
     - vllm serve $MODEL_NAME --port 8000 --max-model-len $MAX_MODEL_LEN
   ports:
     - 8000
   spot_policy: on-demand
   resources:
     gpu:
       name: "RTX4090"
       memory: "24GB"
     cpu: 16..
   ```

   > **Note**
   >
   > Replace `YOUR_HUGGING_FACE_HUB_TOKEN` with your [Hugging Face access token](https://huggingface.co/settings/tokens). The model is gated and requires authentication to download.

### Initialize and deploy

1. In the directory with your `.dstack.yml` file, run:

   ```bash
   dstack init
   ```
2. Deploy the task:

   ```bash
   dstack apply
   ```

   You'll see the deployment configuration and available instances. When prompted:

   ```bash
   Submit the run vllm-llama-3.1-8b-instruct? [y/n]:
   ```

   Type `y` and press Enter.

   The `ports` configuration forwards the deployed Pod's port to `localhost:8000` on your machine.
3. dstack will provision the Pod, download the Docker image, install packages, download the model, and start the vLLM server. You'll see progress logs in the terminal.

   To view logs at any time, run:

   ```bash
   dstack logs vllm-llama-3.1-8b-instruct
   ```

   Wait until you see logs indicating the server is ready:

   ```
   INFO: Started server process [1]
   INFO: Waiting for application startup.
   INFO: Application startup complete.
   INFO: Uvicorn running on http://0.0.0.0:8000 (Press CTRL+C to quit)
   ```

### Test the deployment

The vLLM server is now accessible at `http://localhost:8000`.

Test it with `curl`:

```bash
curl -X POST http://localhost:8000/v1/chat/completions \
     -H "Content-Type: application/json" \
     -d '{
          "model": "meta-llama/Llama-3.1-8B-Instruct",
          "messages": [
             {"role": "system", "content": "You are Poddy, a helpful assistant."},
             {"role": "user", "content": "What is your name?"}
          ],
          "temperature": 0,
          "max_tokens": 150
        }'
```

```bash
curl -X POST http://localhost:8000/v1/chat/completions \
     -H "Content-Type: application/json" \
     -d '{
          "model": "meta-llama/Llama-3.1-8B-Instruct",
          "messages": [
             {"role": "system", "content": "You are Poddy, a helpful assistant."},
             {"role": "user", "content": "What is your name?"}
          ],
          "temperature": 0,
          "max_tokens": 150
        }'
```

**Command Prompt:**

```bash
curl -X POST http://localhost:8000/v1/chat/completions -H "Content-Type: application/json" -d "{ \"model\": \"meta-llama/Llama-3.1-8B-Instruct\", \"messages\": [ {\"role\": \"system\", \"content\": \"You are Poddy, a helpful assistant.\"}, {\"role\": \"user\", \"content\": \"What is your name?\"} ], \"temperature\": 0, \"max_tokens\": 150 }"
```

**PowerShell:**

```bash
curl.exe -Method Post http://localhost:8000/v1/chat/completions `
  -Headers @{ "Content-Type" = "application/json" } `
  -Body '{ "model": "meta-llama/Llama-3.1-8B-Instruct", "messages": [ {"role": "system", "content": "You are Poddy, a helpful assistant."}, {"role": "user", "content": "What is your name?"} ], "temperature": 0, "max_tokens": 150 }'
```

You'll receive a JSON response:

```json
{
  "id": "chat-f0566a5143244d34a0c64c968f03f80c",
  "object": "chat.completion",
  "created": 1727902323,
  "model": "meta-llama/Llama-3.1-8B-Instruct",
  "choices": [
    {
      "index": 0,
      "message": {
        "role": "assistant",
        "content": "My name is Poddy, and I'm here to assist you with any questions or information you may need.",
        "tool_calls": []
      },
      "logprobs": null,
      "finish_reason": "stop",
      "stop_reason": null
    }
  ],
  "usage": {
    "prompt_tokens": 49,
    "total_tokens": 199,
    "completion_tokens": 150
  },
  "prompt_logprobs": null
}
```

### Clean up

Stop the task when you're done to avoid charges.

Press `Ctrl + C` in the terminal where you ran `dstack apply`. When prompted:

```
Stop the run vllm-llama-3.1-8b-instruct before detaching? [y/n]:
```

Type `y` and press Enter.

The instance will terminate automatically. To ensure immediate termination, run:

```bash
dstack stop vllm-llama-3.1-8b-instruct
```

Verify termination in your Runpod dashboard or the dstack web UI.

## Use volumes for persistent storage

Volumes let you store data between runs and cache models to reduce startup times.

### Create a volume

Create a file named `volume.dstack.yml`:

```yml
type: volume
name: llama31-volume

backend: runpod
region: EUR-IS-1

# Required size
size: 100GB
```

> **Note**
>
> The `region` ties your volume to a specific region, which also ties your Pod to that region.

Apply the volume configuration:

```sh
dstack apply -f volume.dstack.yml
```

### Use the volume in your task

Modify your `.dstack.yml` file to include the volume:

```yml
volumes:
- name: llama31-volume
 path: /data
```

This mounts the volume to the `/data` directory inside your container, letting you store models and data persistently. This is useful for large models that take time to download.

For more information, see the [dstack blog on volumes](https://dstack.ai/blog/volumes-on-runpod/).
