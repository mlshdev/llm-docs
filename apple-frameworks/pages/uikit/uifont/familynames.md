> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uifont/familynames](https://developer.apple.com/documentation/uikit/uifont/familynames)

# familyNames (Swift)

**Framework:** UIKit  
**Kind:** Type Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Returns an array of font family names available on the system.

## Declaration

```swift
class var familyNames: [String] { get }
```

<a id="return-value"></a>

## Return Value

An array of `NSString` objects, each of which contains the name of a font family.

<a id="Discussion"></a>

## Discussion

Font family names correspond to the base name of a font, such as `Times New Roman`. You can pass the returned strings to the [fontNames(forFamilyName:)](fontnames%28forfamilyname_%29.md) method to retrieve a list of font names available for that family. You can then use the corresponding font name to retrieve an actual font object.

## See Also

### Getting the Available Font Names

- [fontNames(forFamilyName:)](fontnames%28forfamilyname_%29.md): Returns an array of font names available in a particular font family.

# familyNames (Objective-C)

**Framework:** UIKit  
**Kind:** Type Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Returns an array of font family names available on the system.

## Declaration

```objectivec
@property (class, nonatomic, readonly) NSArray<NSString *> * familyNames;
```

<a id="return-value"></a>

## Return Value

An array of `NSString` objects, each of which contains the name of a font family.

<a id="Discussion"></a>

## Discussion

Font family names correspond to the base name of a font, such as `Times New Roman`. You can pass the returned strings to the [fontNamesForFamilyName:](fontnames%28forfamilyname_%29.md) method to retrieve a list of font names available for that family. You can then use the corresponding font name to retrieve an actual font object.

## See Also

### Getting the Available Font Names

- [fontNamesForFamilyName:](fontnames%28forfamilyname_%29.md): Returns an array of font names available in a particular font family.
