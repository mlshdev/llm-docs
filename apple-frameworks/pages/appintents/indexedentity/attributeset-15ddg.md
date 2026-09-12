> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/appintents/indexedentity/attributeset-15ddg](https://developer.apple.com/documentation/appintents/indexedentity/attributeset-15ddg)

# attributeSet

**Framework:** App Intents  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · visionOS 2.0+

A custom attribute set that you include with your entity to improve search accuracy.

## Declaration

```swift
var attributeSet: CSSearchableItemAttributeSet { get }
```

<a id="discussion"></a>

## Discussion

Use this property to include additional metadata in the index for your app entity. This property augments the set of declared properties in your entity that have an indexing key. The default implementation of this property provides an attribute set with the title, subtitle, and image values from the entity’s display representation.
