> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/appintents/indexedentity/defaultattributeset](https://developer.apple.com/documentation/appintents/indexedentity/defaultattributeset)

# defaultAttributeSet

**Framework:** App Intents  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · visionOS 2.0+

The default set of attributes to include with your app entity in the Spotlight index.

## Declaration

```swift
var defaultAttributeSet: CSSearchableItemAttributeSet { get }
```

<a id="discussion"></a>

## Discussion

This property contains an attribute set with the title, subtitle, and image values from the entity’s display representaiton. Provide any custom attributes for your entity using the [attributeSet](attributeset.md) property instead of this one.

## See Also

### Specifying entity-related attributes

- [attributeSet](attributeset.md): A custom attribute set that you include with your entity to improve search accuracy.
