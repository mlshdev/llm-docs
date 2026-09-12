> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/sharedwithyoucore/swcollaborationoption/init(title:identifier:subtitle:selected:requiredoptionsidentifiers:)](https://developer.apple.com/documentation/sharedwithyoucore/swcollaborationoption/init(title:identifier:subtitle:selected:requiredoptionsidentifiers:))

# init(title:identifier:subtitle:selected:requiredOptionsIdentifiers:)

**Framework:** Shared with You Core  
**Kind:** Initializer  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+

Creates and initializes a collaboration option object with the provided values.

## Declaration

```swift
convenience init(title: String, identifier: String, subtitle: String = "", selected: Bool = false, requiredOptionsIdentifiers: [String] = [])
```

## Parameters

- `title`: A localized string the system displays as a title.
- `identifier`: A unique identifier.
- `subtitle`: A localized string the system displays as a subtitle.
- `selected`: A Boolean value that represents the selected state of an option.
- `requiredOptionsIdentifiers`: An array of option identifiers.

## See Also

### Creating collaboration options

- [init(title:identifier:)](init%28title_identifier_%29.md): Creates and initializes a collaboration option object with a provided title and identifier.
