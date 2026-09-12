> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiprintinfo/init(dictionary:)](https://developer.apple.com/documentation/uikit/uiprintinfo/init(dictionary:))

# init(dictionary:) (Swift)

**Framework:** UIKit  
**Kind:** Initializer  
**Availability:** iOS 4.2+ · iPadOS 4.2+ · Mac Catalyst 13.1+ · visionOS 1.0+

Returns a print-information object that is initialized with the data in the passed-in dictionary.

## Declaration

```swift
init(dictionary: [AnyHashable : Any]?)
```

## Parameters

- `dictionary`: A dictionary that contains data to initialize the `UIPrintInfo` object with.

<a id="return-value"></a>

## Return Value

An instance of `UIPrintInfo` or `nil` if the object could not be created.

<a id="Discussion"></a>

## Discussion

You use the `dictionary` parameter to initialize a `UIPrintInfo` object with stored print-job information.  Some applications might archive a previous `UIPrintInfo` object and use that for a future print job with this method.

You can later access the dictionary by calling the [dictionaryRepresentation](dictionaryrepresentation.md) method on the `UIPrintInfo` object.

## See Also

### Creating a print info object

- [printInfo()](printinfo%28%29.md): Returns a print-information object initialized with default values.
- [dictionaryRepresentation](dictionaryrepresentation.md): A dictionary representation of a print-information object.
- [init(coder:)](init%28coder_%29.md): Creates a print info object from data in an unarchiver.

# printInfoWithDictionary: (Objective-C)

**Framework:** UIKit  
**Kind:** Type Method  
**Availability:** iOS 4.2+ · iPadOS 4.2+ · Mac Catalyst 13.1+ · visionOS 1.0+

Returns a print-information object that is initialized with the data in the passed-in dictionary.

## Declaration

```objectivec
+ (UIPrintInfo *) printInfoWithDictionary:(NSDictionary *) dictionary;
```

## Parameters

- `dictionary`: A dictionary that contains data to initialize the `UIPrintInfo` object with.

<a id="return-value"></a>

## Return Value

An instance of `UIPrintInfo` or `nil` if the object could not be created.

<a id="Discussion"></a>

## Discussion

You use the `dictionary` parameter to initialize a `UIPrintInfo` object with stored print-job information.  Some applications might archive a previous `UIPrintInfo` object and use that for a future print job with this method.

You can later access the dictionary by calling the [dictionaryRepresentation](dictionaryrepresentation.md) method on the `UIPrintInfo` object.

## See Also

### Creating a print info object

- [printInfo](printinfo%28%29.md): Returns a print-information object initialized with default values.
- [dictionaryRepresentation](dictionaryrepresentation.md): A dictionary representation of a print-information object.
- [initWithCoder:](init%28coder_%29.md): Creates a print info object from data in an unarchiver.
