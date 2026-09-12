> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/contacts/cnlabeledvalue/settinglabel(_:)](https://developer.apple.com/documentation/contacts/cnlabeledvalue/settinglabel(_:))

# settingLabel(\_:) (Swift)

**Framework:** Contacts  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · visionOS 1.0+ · watchOS 2.0+

Returns a labeled value object with an existing value and identifier.

## Declaration

```swift
func settingLabel(_ label: String?) -> Self
```

## Parameters

- `label`: The label of the copied labeled value object, or `nil` if the contact property value doesn’t have a label.

<a id="Return-Value"></a>

## Return Value

A labeled value object with an existing value and identifier.

## See Also

### Setting labels and values

- [settingLabel(\_:value:)](settinglabel%28__value_%29.md): Returns a labeled value object with the specified label and value with the existing identifier.
- [settingValue(\_:)](settingvalue%28__%29.md): Returns a new value for an existing label and identifier.

# labeledValueBySettingLabel: (Objective-C)

**Framework:** Contacts  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · visionOS 1.0+ · watchOS 2.0+

Returns a labeled value object with an existing value and identifier.

## Declaration

```objectivec
- (instancetype) labeledValueBySettingLabel:(NSString *) label;
```

## Parameters

- `label`: The label of the copied labeled value object, or `nil` if the contact property value doesn’t have a label.

<a id="Return-Value"></a>

## Return Value

A labeled value object with an existing value and identifier.

## See Also

### Setting labels and values

- [labeledValueBySettingLabel:value:](settinglabel%28__value_%29.md): Returns a labeled value object with the specified label and value with the existing identifier.
- [labeledValueBySettingValue:](settingvalue%28__%29.md): Returns a new value for an existing label and identifier.
