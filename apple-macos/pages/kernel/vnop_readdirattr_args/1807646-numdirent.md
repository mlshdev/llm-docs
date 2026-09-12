> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/vnop_readdirattr_args/1807646-numdirent](https://developer.apple.com/documentation/kernel/vnop_readdirattr_args/1807646-numdirent)

# numdirent

**Interface language:** Objective-C

**Framework:** Kernel

Should be set to number of entries written into buffer.

## See Also

### Fields

- [vp](1807627-vp.md): Directory to enumerate.
- [uio](1807633-uio.md): Destination information for resulting direntries.
- [flags](1807637-flags.md): VNODE_READDIR_EXTENDED, VNODE_READDIR_REQSEEKOFF, VNODE_READDIR_SEEKOFF32: Apple-internal flags.
- [eofflag](1807642-eofflag.md): Should be set to 1 if the end of the directory has been reached.
- [ctx](1807650-ctx.md): Context to authenticate for readdir request.
