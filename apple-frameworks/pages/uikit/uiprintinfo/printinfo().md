> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiprintinfo/printinfo()](https://developer.apple.com/documentation/uikit/uiprintinfo/printinfo())

# printInfo() (Swift)

**Framework:** UIKit  
**Kind:** Type Method  
**Availability:** iOS 4.2+ · iPadOS 4.2+ · Mac Catalyst 13.1+ · visionOS 1.0+

Returns a print-information object initialized with default values.

## Declaration

```swift
class func printInfo() -> UIPrintInfo
```

<a id="return-value"></a>

## Return Value

An instance of `UIPrintInfo` or `nil` if the object could not be created.

## See Also

### Creating a print info object

- [init(dictionary:)](init%28dictionary_%29.md): Returns a print-information object that is initialized with the data in the passed-in dictionary.
- [dictionaryRepresentation](dictionaryrepresentation.md): A dictionary representation of a print-information object.
- [init(coder:)](init%28coder_%29.md): Creates a print info object from data in an unarchiver.

# printInfo (Objective-C)

**Framework:** UIKit  
**Kind:** Type Method  
**Availability:** iOS 4.2+ · iPadOS 4.2+ · Mac Catalyst 13.1+ · visionOS 1.0+

Returns a print-information object initialized with default values.

## Declaration

```objectivec
+ (UIPrintInfo *) printInfo;
```

<a id="return-value"></a>

## Return Value

An instance of `UIPrintInfo` or `nil` if the object could not be created.

## See Also

### Creating a print info object

- [printInfoWithDictionary:](init%28dictionary_%29.md): Returns a print-information object that is initialized with the data in the passed-in dictionary.
- [dictionaryRepresentation](dictionaryrepresentation.md): A dictionary representation of a print-information object.
- [initWithCoder:](init%28coder_%29.md): Creates a print info object from data in an unarchiver.
