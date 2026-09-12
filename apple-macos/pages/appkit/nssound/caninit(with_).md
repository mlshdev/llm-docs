> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nssound/caninit(with:)](https://developer.apple.com/documentation/appkit/nssound/caninit(with:))

# canInit(with:) (Swift)

**Framework:** AppKit  
**Kind:** Type Method  
**Availability:** macOS

Indicates whether the receiver can create an instance of itself from the data in a pasteboard.

## Declaration

```swift
class func canInit(with pasteboard: NSPasteboard) -> Bool
```

## Parameters

- `pasteboard`: Pasteboard containing sound data.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) when the receiver can handle the data represented by `pasteboard`; [false](https://developer.apple.com/documentation/swift/false) otherwise.

<a id="Discussion"></a>

## Discussion

The [NSSound](../nssound.md) method is used to find out whether the class can handle the data in `pasteboard`.

## See Also

### Related Documentation

- [Sound Programming Topics for Cocoa](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/Sound/Sound.html#//apple_ref/doc/uid/10000104i)

### Creating Sounds

- [init(contentsOfFile:byReference:)](init%28contentsoffile_byreference_%29.md): Initializes the receiver with the audio data located at a given filepath.
- [init(contentsOf:byReference:)](init%28contentsof_byreference_%29.md): Initializes the receiver with the audio data located at a given URL.
- [init(data:)](init%28data_%29.md): Initializes the receiver with a given audio data.
- [init(pasteboard:)](init%28pasteboard_%29.md): Initializes the receiver with data from a pasteboard. The pasteboard should contain a type returned by [NSSound](../nssound.md). `NSSound` expects the data to have a proper magic number, sound header, and data for the formats it supports.

# canInitWithPasteboard: (Objective-C)

**Framework:** AppKit  
**Kind:** Type Method  
**Availability:** macOS

Indicates whether the receiver can create an instance of itself from the data in a pasteboard.

## Declaration

```objectivec
+ (BOOL) canInitWithPasteboard:(NSPasteboard *) pasteboard;
```

## Parameters

- `pasteboard`: Pasteboard containing sound data.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) when the receiver can handle the data represented by `pasteboard`; [false](https://developer.apple.com/documentation/swift/false) otherwise.

<a id="Discussion"></a>

## Discussion

The [NSSound](../nssound.md) method is used to find out whether the class can handle the data in `pasteboard`.

## See Also

### Related Documentation

- [Sound Programming Topics for Cocoa](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/Sound/Sound.html#//apple_ref/doc/uid/10000104i)

### Creating Sounds

- [initWithContentsOfFile:byReference:](init%28contentsoffile_byreference_%29.md): Initializes the receiver with the audio data located at a given filepath.
- [initWithContentsOfURL:byReference:](init%28contentsof_byreference_%29.md): Initializes the receiver with the audio data located at a given URL.
- [initWithData:](init%28data_%29.md): Initializes the receiver with a given audio data.
- [initWithPasteboard:](init%28pasteboard_%29.md): Initializes the receiver with data from a pasteboard. The pasteboard should contain a type returned by [NSSound](../nssound.md). `NSSound` expects the data to have a proper magic number, sound header, and data for the formats it supports.
