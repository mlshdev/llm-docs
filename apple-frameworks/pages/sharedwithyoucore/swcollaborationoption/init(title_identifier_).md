> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/sharedwithyoucore/swcollaborationoption/init(title:identifier:)](https://developer.apple.com/documentation/sharedwithyoucore/swcollaborationoption/init(title:identifier:))

# init(title:identifier:) (Swift)

**Framework:** Shared with You Core  
**Kind:** Initializer  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · visionOS 1.0+

Creates and initializes a collaboration option object with a provided title and identifier.

## Declaration

```swift
init(title: String, identifier: String)
```

## Parameters

- `title`: A localized string the system displays as a title.
- `identifier`: A unique identifier.

## See Also

### Creating collaboration options

- [init(title:identifier:subtitle:selected:requiredOptionsIdentifiers:)](init%28title_identifier_subtitle_selected_requiredoptionsidentifiers_%29.md): Creates and initializes a collaboration option object with the provided values.

# optionWithTitle:identifier: (Objective-C)

**Framework:** Shared with You Core  
**Kind:** Type Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · visionOS 1.0+

Creates and initializes a collaboration option object with a provided title and identifier.

## Declaration

```objectivec
+ (SWCollaborationOption *) optionWithTitle:(NSString *) title identifier:(NSString *) identifier;
```

## Parameters

- `title`: A localized string the system displays as a title.
- `identifier`: A unique identifier.

## See Also

### Creating collaboration options

- [initWithTitle:identifier:](initwithtitle_identifier_.md): Creates and initializes a collaboration option object.
