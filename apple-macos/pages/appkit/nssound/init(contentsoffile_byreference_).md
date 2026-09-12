> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nssound/init(contentsoffile:byreference:)](https://developer.apple.com/documentation/appkit/nssound/init(contentsoffile:byreference:))

# init(contentsOfFile:byReference:) (Swift)

**Framework:** AppKit  
**Kind:** Initializer  
**Availability:** macOS

Initializes the receiver with the audio data located at a given filepath.

## Declaration

```swift
init?(contentsOfFile path: String, byReference byRef: Bool)
```

## Parameters

- `path`: Path to the sound file with which the receiver is to be initialized.
- `byRef`: When [true](https://developer.apple.com/documentation/swift/true) only the name of the sound is stored with the `NSSound` instance when archived using [encode(with:)](https://developer.apple.com/documentation/foundation/nscoding/encode%28with:%29); otherwise the audio data is archived along with the instance.

<a id="return-value"></a>

## Return Value

Initialized `NSSound` instance.

## See Also

### Creating Sounds

- [canInit(with:)](caninit%28with_%29.md): Indicates whether the receiver can create an instance of itself from the data in a pasteboard.
- [init(contentsOf:byReference:)](init%28contentsof_byreference_%29.md): Initializes the receiver with the audio data located at a given URL.
- [init(data:)](init%28data_%29.md): Initializes the receiver with a given audio data.
- [init(pasteboard:)](init%28pasteboard_%29.md): Initializes the receiver with data from a pasteboard. The pasteboard should contain a type returned by [NSSound](../nssound.md). `NSSound` expects the data to have a proper magic number, sound header, and data for the formats it supports.

# initWithContentsOfFile:byReference: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Initializes the receiver with the audio data located at a given filepath.

## Declaration

```objectivec
- (instancetype) initWithContentsOfFile:(NSString *) path byReference:(BOOL) byRef;
```

## Parameters

- `path`: Path to the sound file with which the receiver is to be initialized.
- `byRef`: When [true](https://developer.apple.com/documentation/swift/true) only the name of the sound is stored with the `NSSound` instance when archived using [encodeWithCoder:](https://developer.apple.com/documentation/foundation/nscoding/encode%28with:%29); otherwise the audio data is archived along with the instance.

<a id="return-value"></a>

## Return Value

Initialized `NSSound` instance.

## See Also

### Creating Sounds

- [canInitWithPasteboard:](caninit%28with_%29.md): Indicates whether the receiver can create an instance of itself from the data in a pasteboard.
- [initWithContentsOfURL:byReference:](init%28contentsof_byreference_%29.md): Initializes the receiver with the audio data located at a given URL.
- [initWithData:](init%28data_%29.md): Initializes the receiver with a given audio data.
- [initWithPasteboard:](init%28pasteboard_%29.md): Initializes the receiver with data from a pasteboard. The pasteboard should contain a type returned by [NSSound](../nssound.md). `NSSound` expects the data to have a proper magic number, sound header, and data for the formats it supports.
