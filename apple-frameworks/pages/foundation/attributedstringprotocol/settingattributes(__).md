> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/attributedstringprotocol/settingattributes(_:)](https://developer.apple.com/documentation/foundation/attributedstringprotocol/settingattributes(_:))

# settingAttributes(\_:)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

Returns an attributed string by setting the attributed string’s attributes to those in a specified attribute container.

## Declaration

```swift
func settingAttributes(_ attributes: AttributeContainer) -> AttributedString
```

## Parameters

- `attributes`: The attribute container with the attributes to apply.

<a id="return-value"></a>

## Return Value

An attributed string from setting the attributed string’s attributes to those in a specified attribute container.

## See Also

### Applying Attributes

- [mergingAttributes(\_:mergePolicy:)](mergingattributes%28__mergepolicy_%29.md): Returns an attributed string by merging the attributed string’s attributes with those in a specified attribute container.
- [AttributedString.AttributeMergePolicy](../attributedstring/attributemergepolicy.md): An enumeration of behaviors to apply when merging attributes.
- [replacingAttributes(\_:with:)](replacingattributes%28__with_%29.md): Returns an attributed string by replacing occurrences of attributes in one attribute container with those in another attribute container.
