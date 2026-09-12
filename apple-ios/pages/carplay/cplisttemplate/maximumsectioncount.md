> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/carplay/cplisttemplate/maximumsectioncount](https://developer.apple.com/documentation/carplay/cplisttemplate/maximumsectioncount)

# maximumSectionCount (Swift)

**Framework:** CarPlay  
**Kind:** Type Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+

The maximum number of sections that the template can display.

## Declaration

```swift
class var maximumSectionCount: Int { get }
```

<a id="Discussion"></a>

## Discussion

This property’s value is dependent on any user interface limits that the vehicle imposes. See [CPSessionConfiguration](../cpsessionconfiguration.md) for more information. At runtime, use this value to determine the maximum number of sections that your list can display.

## See Also

### Managing Sections

- [sectionCount](sectioncount.md): The number of sections in the list.
- [sections](sections.md): The sections that the list displays.
- [updateSections(\_:)](updatesections%28__%29.md): Adds, removes, reorders, or updates the list’s sections.
- [CPListSection](../cplistsection.md): A container that groups your list items into sections.

# maximumSectionCount (Objective-C)

**Framework:** CarPlay  
**Kind:** Type Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+

The maximum number of sections that the template can display.

## Declaration

```objectivec
@property (class, nonatomic, readonly) NSUInteger maximumSectionCount;
```

<a id="Discussion"></a>

## Discussion

This property’s value is dependent on any user interface limits that the vehicle imposes. See [CPSessionConfiguration](../cpsessionconfiguration.md) for more information. At runtime, use this value to determine the maximum number of sections that your list can display.

## See Also

### Managing Sections

- [sectionCount](sectioncount.md): The number of sections in the list.
- [sections](sections.md): The sections that the list displays.
- [updateSections:](updatesections%28__%29.md): Adds, removes, reorders, or updates the list’s sections.
- [CPListSection](../cplistsection.md): A container that groups your list items into sections.
