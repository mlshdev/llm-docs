> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiconfigurationstate-8d7pd/init(traitcollection:)](https://developer.apple.com/documentation/uikit/uiconfigurationstate-8d7pd/init(traitcollection:))

# init(traitCollection:)

**Framework:** UIKit  
**Kind:** Initializer  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · tvOS 14.0+ · visionOS

Creates a view configuration state with the specified trait collection.

## Declaration

```swift
init(traitCollection: UITraitCollection)
```

<a id="Discussion"></a>

## Discussion

Typically, you don’t create a configuration state yourself. To obtain a configuration state, override the [updateConfiguration(using:)](../uicollectionviewcell/updateconfiguration%28using_%29.md) method in your view subclass and use the state parameter. Outside of this method, you can get a view’s configuration state by using its [configurationState](../uicollectionviewcell/configurationstate-4u37h.md) property.
