> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiprintinfo/init(coder:)](https://developer.apple.com/documentation/uikit/uiprintinfo/init(coder:))

# init(coder:) (Swift)

**Framework:** UIKit  
**Kind:** Initializer  
**Availability:** iOS 4.2+ · iPadOS 4.2+ · Mac Catalyst 13.1+ · visionOS 1.0+

Creates a print info object from data in an unarchiver.

## Declaration

```swift
init?(coder: NSCoder)
```

## See Also

### Creating a print info object

- [printInfo()](printinfo%28%29.md): Returns a print-information object initialized with default values.
- [init(dictionary:)](init%28dictionary_%29.md): Returns a print-information object that is initialized with the data in the passed-in dictionary.
- [dictionaryRepresentation](dictionaryrepresentation.md): A dictionary representation of a print-information object.

# initWithCoder: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 4.2+ · iPadOS 4.2+ · Mac Catalyst 13.1+ · visionOS 1.0+

Creates a print info object from data in an unarchiver.

## Declaration

```objectivec
- (instancetype) initWithCoder:(NSCoder *) coder;
```

## See Also

### Creating a print info object

- [printInfo](printinfo%28%29.md): Returns a print-information object initialized with default values.
- [printInfoWithDictionary:](init%28dictionary_%29.md): Returns a print-information object that is initialized with the data in the passed-in dictionary.
- [dictionaryRepresentation](dictionaryrepresentation.md): A dictionary representation of a print-information object.
