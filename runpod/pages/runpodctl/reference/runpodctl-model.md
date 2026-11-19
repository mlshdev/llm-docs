> Pinned source for Runpod main: [runpodctl/reference/runpodctl-model.mdx](https://github.com/runpod/docs/blob/1d195e36bae30bf7ccc6543bce79500dea0e259c/runpodctl/reference/runpodctl-model.mdx)
> Canonical documentation: https://docs.runpod.io/runpodctl/reference/runpodctl-model

# model

Use runpodctl to add, list, and remove models in the Runpod model repository, including uploads from a local directory or Hugging Face.

Manage models in the Runpod model repository. You can add a model from a local directory or mirror one from Hugging Face, list your models, and remove ones you no longer need.

```bash Command
runpodctl model <subcommand> [flags]
```

## Subcommands

### List models

List the models in your model repository:

```bash
runpodctl model list
```

You can use `ls` as a shorthand for `list`.

#### List flags

**--name (type: string)**

Filter by model name.

**--provider (type: string)**

Filter by provider.

### Add a model

Add a model by mirroring a Hugging Face repository. `--name` is the name the model gets in your repository, and `--huggingface-model` is the source:

```bash
runpodctl model add --name tiny-llm --huggingface-model arnir0/Tiny-LLM
```

Add a model by uploading a local directory of model files:

```bash
runpodctl model add --name my-model --model-path ./my-model-dir
```

To wait until the uploaded model is ready to deploy, add `--wait-for-hash`. To also delete the local files once the upload is confirmed, add `--delete-my-model-files-after-upload`:

```bash
runpodctl model add --name my-model --model-path ./my-model-dir \
  --wait-for-hash --delete-my-model-files-after-upload
```

`--huggingface-model` can't be combined with the local upload flags, such as `--model-path`.

> **Warning**
>
> `--delete-my-model-files-after-upload` deletes the files in `--model-path` from your machine. It requires `--wait-for-hash`, so files are deleted only after the model version is confirmed deployable.

#### Add flags

**--name (type: string; required)**

Name for the model in your repository.

**--huggingface-model (type: string)**

Hugging Face model to mirror, in `owner/repo` format.

**--model-path (type: string)**

Local directory containing the model files to upload.

**--owner (type: string)**

Owner namespace for the model: a user or team owner ID.

**--wait-for-hash (type: bool)**

Wait for a completed `--model-path` upload to become deployable.

**--hash-timeout (type: duration)**

Maximum time to wait with `--wait-for-hash` (default `30m`). `0` disables the timeout.

**--delete-my-model-files-after-upload (type: bool)**

Delete the uploaded `--model-path` files once the model version is confirmed deployable. Requires `--wait-for-hash`.

**--verbose, -v (type: bool)**

Include upload details in the `--wait-for-hash` output.

**--metadata (type: string)**

Metadata as `key=value` pairs.

**--model-status (type: string)**

Initial model status.

**--credential-type (type: string)**

Credential type, if the source requires one.

**--credential-reference (type: string)**

Credential reference, if the source requires one.

**--create-upload (type: bool)**

Create an upload session.

**--file-name (type: string)**

File name for the upload.

**--file-size (type: string)**

File size in bytes.

**--content-type (type: string)**

Content type of the upload.

**--part-size (type: string)**

Part size for multipart uploads, in bytes.

### Remove a model

Remove a model from your repository. Both `--name` and `--owner` are required:

```bash
runpodctl model remove --owner <owner> --name my-model
```

You can use `rm` or `delete` as a shorthand for `remove`.

A model that a Serverless endpoint still references can't be removed. The command fails and lists the endpoints that use it. Detach the model from each endpoint first, then remove it:

```bash
runpodctl serverless update <endpoint-id> --clear-models
runpodctl model remove --owner <owner> --name my-model
```

#### Remove flags

**--name (type: string; required)**

Name of the model to remove.

**--owner (type: string; required)**

Owner of the model.

**--version (type: string)**

UUID of a specific model version to remove.

**--hash (type: string)**

Hash of a specific model version to remove.

## Related commands

- [`runpodctl serverless`](https://docs.runpod.io/runpodctl/reference/runpodctl-serverless)
- [`runpodctl network-volume`](https://docs.runpod.io/runpodctl/reference/runpodctl-network-volume)
