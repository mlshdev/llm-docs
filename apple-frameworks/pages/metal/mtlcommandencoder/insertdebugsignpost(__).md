> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlcommandencoder/insertdebugsignpost(_:)](https://developer.apple.com/documentation/metal/mtlcommandencoder/insertdebugsignpost(_:))

# insertDebugSignpost(\_:) (Swift)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS · visionOS 1.0+

Inserts a debug string into the captured frame data.

## Declaration

```swift
func insertDebugSignpost(_ string: String)
```

<a id="discussion"></a>

## Discussion

For more information, see [Naming resources and commands](https://developer.apple.com/documentation/xcode/naming-resources-and-commands).

## See Also

### Annotating the command buffer with debug information

- [pushDebugGroup(\_:)](pushdebuggroup%28__%29.md): Pushes a specific string onto a stack of debug group strings for the command encoder.
- [popDebugGroup()](popdebuggroup%28%29.md): Pops the latest string off of a stack of debug group strings for the command encoder.

# insertDebugSignpost: (Objective-C)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS · visionOS 1.0+

Inserts a debug string into the captured frame data.

## Declaration

```objectivec
- (void) insertDebugSignpost:(NSString *) string;
```

<a id="discussion"></a>

## Discussion

For more information, see [Naming resources and commands](https://developer.apple.com/documentation/xcode/naming-resources-and-commands).

## See Also

### Annotating the command buffer with debug information

- [pushDebugGroup:](pushdebuggroup%28__%29.md): Pushes a specific string onto a stack of debug group strings for the command encoder.
- [popDebugGroup](popdebuggroup%28%29.md): Pops the latest string off of a stack of debug group strings for the command encoder.
