> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nssound/init(data:)](https://developer.apple.com/documentation/appkit/nssound/init(data:))

# init(data:) (Swift)

**Framework:** AppKit  
**Kind:** Initializer  
**Availability:** macOS

Initializes the receiver with a given audio data.

## Declaration

```swift
init?(data: Data)
```

## Parameters

- `data`: Audio data with which the receiver is to be initialized. The data must have a proper magic number, sound header, and data for the formats the `NSSound` class supports.

<a id="return-value"></a>

## Return Value

Initialized `NSSound` instance.

## See Also

### Creating Sounds

- [canInit(with:)](caninit%28with_%29.md): Indicates whether the receiver can create an instance of itself from the data in a pasteboard.
- [init(contentsOfFile:byReference:)](init%28contentsoffile_byreference_%29.md): Initializes the receiver with the audio data located at a given filepath.
- [init(contentsOf:byReference:)](init%28contentsof_byreference_%29.md): Initializes the receiver with the audio data located at a given URL.
- [init(pasteboard:)](init%28pasteboard_%29.md): Initializes the receiver with data from a pasteboard. The pasteboard should contain a type returned by [NSSound](../nssound.md). `NSSound` expects the data to have a proper magic number, sound header, and data for the formats it supports.

# initWithData: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Initializes the receiver with a given audio data.

## Declaration

```objectivec
- (instancetype) initWithData:(NSData *) data;
```

## Parameters

- `data`: Audio data with which the receiver is to be initialized. The data must have a proper magic number, sound header, and data for the formats the `NSSound` class supports.

<a id="return-value"></a>

## Return Value

Initialized `NSSound` instance.

## See Also

### Creating Sounds

- [canInitWithPasteboard:](caninit%28with_%29.md): Indicates whether the receiver can create an instance of itself from the data in a pasteboard.
- [initWithContentsOfFile:byReference:](init%28contentsoffile_byreference_%29.md): Initializes the receiver with the audio data located at a given filepath.
- [initWithContentsOfURL:byReference:](init%28contentsof_byreference_%29.md): Initializes the receiver with the audio data located at a given URL.
- [initWithPasteboard:](init%28pasteboard_%29.md): Initializes the receiver with data from a pasteboard. The pasteboard should contain a type returned by [NSSound](../nssound.md). `NSSound` expects the data to have a proper magic number, sound header, and data for the formats it supports.
