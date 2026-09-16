> Pinned source for Runpod main: [runpodctl/reference/runpodctl-send.mdx](https://github.com/runpod/docs/blob/1ac8c64f9623ca776ec994c36b22d4329facbb1d/runpodctl/reference/runpodctl-send.mdx)
> Canonical documentation: https://docs.runpod.io/runpodctl/reference/runpodctl-send

# send

Send files or folders from your machine to a Pod or another computer through runpodctl using a secure peer-to-peer connection.

Transfer files or folders from your local machine to a Pod or another computer using a secure peer-to-peer connection.

```bash Command
runpodctl send <fileOrFolder> [flags]
```

## Example

Send a folder to a Pod using a connection code:

```bash
runpodctl send ./my-dataset --code rainbow-unicorn-42
```

## Arguments

**\<fileOrFolder> (type: string; required)**

The path to the file or folder you want to send. Can be a single file or an entire directory.

## Flags

**--code (type: string)**

A custom code phrase used to establish the secure connection between sender and receiver. The receiver must use the same code with the [`receive`](https://docs.runpod.io/runpodctl/reference/runpodctl-receive) command.

## Related commands

- [`runpodctl receive`](https://docs.runpod.io/runpodctl/reference/runpodctl-receive)
