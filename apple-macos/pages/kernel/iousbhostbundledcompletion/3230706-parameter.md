> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/kernel/iousbhostbundledcompletion/3230706-parameter

# parameter

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Instance Property  
**Availability:** macOS 10.15+

A context pointer within the completion action.

## Declaration

```objectivec
void *parameter;
```

## See Also

### Getting the Properties

- [owner](3230705-owner.md): A pointer to an object that owns the transfer.
- [action](3230704-action.md): The action that executes when the input/output request completes.
