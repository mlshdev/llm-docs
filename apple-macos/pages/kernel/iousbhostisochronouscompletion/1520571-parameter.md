> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/iousbhostisochronouscompletion/1520571-parameter](https://developer.apple.com/documentation/kernel/iousbhostisochronouscompletion/1520571-parameter)

# parameter

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Instance Property  
**Availability:** macOS 10.11+

A context pointer within the completion action.

## Declaration

```objectivec
void *parameter;
```

## See Also

### Getting the Properties

- [owner](1520582-owner.md): A pointer to an object that owns the transfer.
- [action](1520577-action.md): The action to run when the input/output request completes.
