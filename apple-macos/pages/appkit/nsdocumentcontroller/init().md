> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsdocumentcontroller/init()](https://developer.apple.com/documentation/appkit/nsdocumentcontroller/init())

# init() (Swift)

**Framework:** AppKit  
**Kind:** Initializer  
**Availability:** macOS

This method is the designated initializer for `NSDocumentController`.

## Declaration

```swift
init()
```

<a id="return-value"></a>

## Return Value

The initialized document controller object.

<a id="Discussion"></a>

## Discussion

The first instance of `NSDocumentController` or any of its subclasses that is created becomes the shared instance.

## See Also

### Initializing a New NSDocumentController

- [init(coder:)](init%28coder_%29.md): This method initializes a new NSDocumentController from the coder.

# init (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

This method is the designated initializer for `NSDocumentController`.

## Declaration

```objectivec
- (instancetype) init;
```

<a id="return-value"></a>

## Return Value

The initialized document controller object.

<a id="Discussion"></a>

## Discussion

The first instance of `NSDocumentController` or any of its subclasses that is created becomes the shared instance.

## See Also

### Initializing a New NSDocumentController

- [initWithCoder:](init%28coder_%29.md): This method initializes a new NSDocumentController from the coder.
