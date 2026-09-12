> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/trustinsights/insightevaluation/eventid](https://developer.apple.com/documentation/trustinsights/insightevaluation/eventid)

# eventID

**Framework:** Trust Insights  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+

Identifier for this evaluation result that can be recorded with other transaction records so that in the event that fraud or abuse is later discovered associated with the transaction it can be reported to Apple as Offline feedback via Apple Business Register

## Declaration

```swift
final var eventID: String { get }
```
