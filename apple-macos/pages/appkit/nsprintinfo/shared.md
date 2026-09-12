> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsprintinfo/shared](https://developer.apple.com/documentation/appkit/nsprintinfo/shared)

# shared (Swift)

**Framework:** AppKit  
**Kind:** Type Property  
**Availability:** macOS

The shared printing information object.

## Declaration

```swift
class var shared: NSPrintInfo { get set }
```

<a id="return-value"></a>

## Return Value

The shared printer information.

## See Also

### Creating the Printing Information Object

- [init(dictionary:)](init%28dictionary_%29.md): Returns a printing information object initialized with the parameters in the specified dictionary.
- [init()](init%28%29.md): Creates a printing information object.
- [init(coder:)](init%28coder_%29.md): Creates a printing information object from data in an unarchiver.

# sharedPrintInfo (Objective-C)

**Framework:** AppKit  
**Kind:** Type Property  
**Availability:** macOS

The shared printing information object.

## Declaration

```objectivec
@property (class, strong) NSPrintInfo * sharedPrintInfo;
```

<a id="return-value"></a>

## Return Value

The shared printer information.

## See Also

### Creating the Printing Information Object

- [initWithDictionary:](init%28dictionary_%29.md): Returns a printing information object initialized with the parameters in the specified dictionary.
- [init](init%28%29.md): Creates a printing information object.
- [initWithCoder:](init%28coder_%29.md): Creates a printing information object from data in an unarchiver.
