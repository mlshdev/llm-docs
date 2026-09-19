> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/xpc/xpclistener/initializationoptions/inactive

# inactive

**Framework:** XPC  
**Kind:** Type Property  
**Availability:** Mac Catalyst 17.0+ · macOS 14.0+

Indicates that the listener isn’t activated during its creation.

## Declaration

```swift
static let inactive: XPCListener.InitializationOptions
```

<a id="Discussion"></a>

## Discussion

> **Important**

>  If you create a listener with this option, you must manually activate it by calling [activate()](../activate%28%29.md).

## See Also

### Listener creation options

- [none](none.md): Indicates that the listener uses a default configuration during creation.
