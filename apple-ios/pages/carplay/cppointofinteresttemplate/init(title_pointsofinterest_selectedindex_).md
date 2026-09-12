> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/carplay/cppointofinteresttemplate/init(title:pointsofinterest:selectedindex:)](https://developer.apple.com/documentation/carplay/cppointofinteresttemplate/init(title:pointsofinterest:selectedindex:))

# init(title:pointsOfInterest:selectedIndex:) (Swift)

**Framework:** CarPlay  
**Kind:** Initializer  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+

Creates a Point of Interest template with a title, the points of interest to display, and the initial selection’s index.

## Declaration

```swift
init(title: String, pointsOfInterest: [CPPointOfInterest], selectedIndex: Int)
```

## Parameters

- `title`: The scrollable picker’s title.
- `pointsOfInterest`: An array that contains the points of interest the template displays.
- `selectedIndex`: The initial selection’s index. This is the array’s index for the specific point of interest you want to select. Use [NSNotFound](https://developer.apple.com/documentation/foundation/nsnotfound-4qp9h) to indicate no initial selection.

<a id="Discussion"></a>

## Discussion

`pointsOfInterest` can contain a maximum of twelve points of interest because that is the most the template displays.

## See Also

### Creating a Point of Interest Template

- [CPPointOfInterest](../cppointofinterest.md): An object that describes a point of interest on the template’s map and in its scrollable picker.

# initWithTitle:pointsOfInterest:selectedIndex: (Objective-C)

**Framework:** CarPlay  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+

Creates a Point of Interest template with a title, the points of interest to display, and the initial selection’s index.

## Declaration

```objectivec
- (instancetype) initWithTitle:(NSString *) title pointsOfInterest:(NSArray<CPPointOfInterest *> *) pointsOfInterest selectedIndex:(NSUInteger) selectedIndex;
```

## Parameters

- `title`: The scrollable picker’s title.
- `pointsOfInterest`: An array that contains the points of interest the template displays.
- `selectedIndex`: The initial selection’s index. This is the array’s index for the specific point of interest you want to select. Use [NSNotFound](https://developer.apple.com/documentation/foundation/nsnotfound-4qp9h) to indicate no initial selection.

<a id="Discussion"></a>

## Discussion

`pointsOfInterest` can contain a maximum of twelve points of interest because that is the most the template displays.

## See Also

### Creating a Point of Interest Template

- [CPPointOfInterest](../cppointofinterest.md): An object that describes a point of interest on the template’s map and in its scrollable picker.
