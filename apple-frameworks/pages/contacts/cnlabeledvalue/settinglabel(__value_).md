> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/contacts/cnlabeledvalue/settinglabel(_:value:)](https://developer.apple.com/documentation/contacts/cnlabeledvalue/settinglabel(_:value:))

# settingLabel(\_:value:) (Swift)

**Framework:** Contacts  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · visionOS 1.0+ · watchOS 2.0+

Returns a labeled value object with the specified label and value with the existing identifier.

## Declaration

```swift
func settingLabel(_ label: String?, value: ValueType) -> Self
```

## Parameters

- `label`: The label of the copied labeled value object, or `nil` if the contact property value doesn’t have a label.
- `value`: The copied labeled value object. For valid values, see [CNContact](../cncontact.md) properties that are arrays of labeled value objects.

<a id="Return-Value"></a>

## Return Value

A labeled value object with the existing identifier.

## See Also

### Setting labels and values

- [settingLabel(\_:)](settinglabel%28__%29.md): Returns a labeled value object with an existing value and identifier.
- [settingValue(\_:)](settingvalue%28__%29.md): Returns a new value for an existing label and identifier.

# labeledValueBySettingLabel:value: (Objective-C)

**Framework:** Contacts  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · visionOS 1.0+ · watchOS 2.0+

Returns a labeled value object with the specified label and value with the existing identifier.

## Declaration

```objectivec
- (instancetype) labeledValueBySettingLabel:(NSString *) label value:(ValueType) value;
```

## Parameters

- `label`: The label of the copied labeled value object, or `nil` if the contact property value doesn’t have a label.
- `value`: The copied labeled value object. For valid values, see [CNContact](../cncontact.md) properties that are arrays of labeled value objects.

<a id="Return-Value"></a>

## Return Value

A labeled value object with the existing identifier.

## See Also

### Setting labels and values

- [labeledValueBySettingLabel:](settinglabel%28__%29.md): Returns a labeled value object with an existing value and identifier.
- [labeledValueBySettingValue:](settingvalue%28__%29.md): Returns a new value for an existing label and identifier.
