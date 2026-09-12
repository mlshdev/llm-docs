> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/widgetkit/activityviewcontext](https://developer.apple.com/documentation/widgetkit/activityviewcontext)

# ActivityViewContext

**Framework:** WidgetKit  
**Kind:** Structure  
**Availability:** iOS 16.1+ · iPadOS 16.1+

A structure that describes the view context for creating the views of a Live Activity.

## Declaration

```swift
struct ActivityViewContext<Attributes> where Attributes : ActivityAttributes
```

## Topics

### Describing a Live Activity

- [attributes](activityviewcontext/attributes.md): A set of attributes that describe a Live Activity and its content at the time of its creation.
- [state](activityviewcontext/state.md): The dynamic content of a Live Activity at the time of its creation.
- [isStale](activityviewcontext/isstale.md): A Boolean value that describes whether the Live Activity is out of date.
- [activityID](activityviewcontext/activityid.md): A unique identifier for the Live Activity.

## See Also

### Creating a Live Activity configuration

- [init(for:content:dynamicIsland:)](activityconfiguration/init%28for_content_dynamicisland_%29.md): Creates a configuration object for a Live Activity.
