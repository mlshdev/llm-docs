> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/roomplan/roombuilder/configurationoptions/beautifyobjects](https://developer.apple.com/documentation/roomplan/roombuilder/configurationoptions/beautifyobjects)

# beautifyObjects

**Framework:** RoomPlan  
**Kind:** Type Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+

An option that instructs the captured room to enhance its look.

## Declaration

```swift
static let beautifyObjects: RoomBuilder.ConfigurationOptions
```

<a id="discussion"></a>

## Discussion

If a capture contains a group of chairs around a table, this option realigns the chairs neatly around the table. If a chair has object attributes, this option unifies the attributes such that each chair in the group contains the same attributes.
