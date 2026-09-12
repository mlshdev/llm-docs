> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uifont/fontnames(forfamilyname:)](https://developer.apple.com/documentation/uikit/uifont/fontnames(forfamilyname:))

# fontNames(forFamilyName:) (Swift)

**Framework:** UIKit  
**Kind:** Type Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Returns an array of font names available in a particular font family.

## Declaration

```swift
class func fontNames(forFamilyName familyName: String) -> [String]
```

## Parameters

- `familyName`: The name of the font family. Use the [familyNames](familynames.md) method to get an array of the available font family names on the system.

<a id="return-value"></a>

## Return Value

An array of `NSString` objects, each of which contains a font name associated with the specified family.

<a id="Discussion"></a>

## Discussion

You can pass the returned strings as parameters to the [init(name:size:)](init%28name_size_%29.md) method to retrieve an actual font object.

## See Also

### Related Documentation

- [init(name:size:)](init%28name_size_%29.md): Creates and returns a font object for the specified font name and size.

### Getting the Available Font Names

- [familyNames](familynames.md): Returns an array of font family names available on the system.

# fontNamesForFamilyName: (Objective-C)

**Framework:** UIKit  
**Kind:** Type Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Returns an array of font names available in a particular font family.

## Declaration

```objectivec
+ (NSArray<NSString *> *) fontNamesForFamilyName:(NSString *) familyName;
```

## Parameters

- `familyName`: The name of the font family. Use the [familyNames](familynames.md) method to get an array of the available font family names on the system.

<a id="return-value"></a>

## Return Value

An array of `NSString` objects, each of which contains a font name associated with the specified family.

<a id="Discussion"></a>

## Discussion

You can pass the returned strings as parameters to the [fontWithName:size:](init%28name_size_%29.md) method to retrieve an actual font object.

## See Also

### Related Documentation

- [fontWithName:size:](init%28name_size_%29.md): Creates and returns a font object for the specified font name and size.

### Getting the Available Font Names

- [familyNames](familynames.md): Returns an array of font family names available on the system.
