> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/attributedstringprotocol/replacingattributes(_:with:)](https://developer.apple.com/documentation/foundation/attributedstringprotocol/replacingattributes(_:with:))

# replacingAttributes(\_:with:)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

Returns an attributed string by replacing occurrences of attributes in one attribute container with those in another attribute container.

## Declaration

```swift
func replacingAttributes(_ attributes: AttributeContainer, with others: AttributeContainer) -> AttributedString
```

## Parameters

- `attributes`: The existing attributes to replace.
- `others`: The new attributes to apply.

<a id="return-value"></a>

## Return Value

An attributed string created by replacing occurrences of attributes in one attribute container with those in another attribute container.

## See Also

### Applying Attributes

- [settingAttributes(\_:)](settingattributes%28__%29.md): Returns an attributed string by setting the attributed string’s attributes to those in a specified attribute container.
- [mergingAttributes(\_:mergePolicy:)](mergingattributes%28__mergepolicy_%29.md): Returns an attributed string by merging the attributed string’s attributes with those in a specified attribute container.
- [AttributedString.AttributeMergePolicy](../attributedstring/attributemergepolicy.md): An enumeration of behaviors to apply when merging attributes.
