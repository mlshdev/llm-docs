> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtl4commandencoder/insertdebugsignpost(_:)](https://developer.apple.com/documentation/metal/mtl4commandencoder/insertdebugsignpost(_:))

# insertDebugSignpost(\_:) (Swift)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Inserts a debug string into the frame data to aid debugging.

## Declaration

```swift
func insertDebugSignpost(_ string: String)
```

## Parameters

- `string`: The debug string to insert as a signpost.

<a id="discussion"></a>

## Discussion

Calling this method doesn’t change any behaviors, but can be useful for debugging purposes.

# insertDebugSignpost: (Objective-C)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Inserts a debug string into the frame data to aid debugging.

## Declaration

```objectivec
- (void) insertDebugSignpost:(NSString *) string;
```

## Parameters

- `string`: The debug string to insert as a signpost.

<a id="discussion"></a>

## Discussion

Calling this method doesn’t change any behaviors, but can be useful for debugging purposes.
