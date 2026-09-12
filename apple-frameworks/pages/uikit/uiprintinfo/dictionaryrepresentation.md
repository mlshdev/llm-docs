> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiprintinfo/dictionaryrepresentation](https://developer.apple.com/documentation/uikit/uiprintinfo/dictionaryrepresentation)

# dictionaryRepresentation (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 4.2+ · iPadOS 4.2+ · Mac Catalyst 13.1+ · visionOS 1.0+

A dictionary representation of a print-information object.

## Declaration

```swift
var dictionaryRepresentation: [AnyHashable : Any] { get }
```

<a id="return-value"></a>

## Return Value

A dictionary representation of a `UIPrintInfo` object that can be archived and used to create a new `UIPrintInfo` object. Returns `nil` if no dictionary can be created.

## See Also

### Creating a print info object

- [printInfo()](printinfo%28%29.md): Returns a print-information object initialized with default values.
- [init(dictionary:)](init%28dictionary_%29.md): Returns a print-information object that is initialized with the data in the passed-in dictionary.
- [init(coder:)](init%28coder_%29.md): Creates a print info object from data in an unarchiver.

# dictionaryRepresentation (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 4.2+ · iPadOS 4.2+ · Mac Catalyst 13.1+ · visionOS 1.0+

A dictionary representation of a print-information object.

## Declaration

```objectivec
@property (nonatomic, readonly) NSDictionary * dictionaryRepresentation;
```

<a id="return-value"></a>

## Return Value

A dictionary representation of a `UIPrintInfo` object that can be archived and used to create a new `UIPrintInfo` object. Returns `nil` if no dictionary can be created.

## See Also

### Creating a print info object

- [printInfo](printinfo%28%29.md): Returns a print-information object initialized with default values.
- [printInfoWithDictionary:](init%28dictionary_%29.md): Returns a print-information object that is initialized with the data in the passed-in dictionary.
- [initWithCoder:](init%28coder_%29.md): Creates a print info object from data in an unarchiver.
