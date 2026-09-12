> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/contacts/cnlabeledvalue/localizedstring(forlabel:)](https://developer.apple.com/documentation/contacts/cnlabeledvalue/localizedstring(forlabel:))

# localizedString(forLabel:) (Swift)

**Framework:** Contacts  
**Kind:** Type Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · visionOS 1.0+ · watchOS 2.0+

Returns a localized string for the specified label.

## Declaration

```swift
class func localizedString(forLabel label: String) -> String
```

## Parameters

- `label`: The label to be localized.

<a id="Return-Value"></a>

## Return Value

Returns a localized string for the label.

<a id="Discussion"></a>

## Discussion

All predefined label constants are localized and this method returns their localized strings. A custom label will be returned as is, so this method can be used to convert all labels for display.

# localizedStringForLabel: (Objective-C)

**Framework:** Contacts  
**Kind:** Type Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · visionOS 1.0+ · watchOS 2.0+

Returns a localized string for the specified label.

## Declaration

```objectivec
+ (NSString *) localizedStringForLabel:(NSString *) label;
```

## Parameters

- `label`: The label to be localized.

<a id="Return-Value"></a>

## Return Value

Returns a localized string for the label.

<a id="Discussion"></a>

## Discussion

All predefined label constants are localized and this method returns their localized strings. A custom label will be returned as is, so this method can be used to convert all labels for display.
