> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/managedsettings/webcontentsettings/filterpolicy](https://developer.apple.com/documentation/managedsettings/webcontentsettings/filterpolicy)

# WebContentSettings.FilterPolicy

**Framework:** Managed Settings  
**Kind:** Enumeration  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+

The policies available for filtering web content based on specific web domains.

## Declaration

```swift
enum FilterPolicy
```

## Topics

### Providing filters and exceptions

- [WebContentSettings.FilterPolicy.all(except:)](filterpolicy/all%28except_%29.md): The system blocks all websites except the ones you specify.
- [WebContentSettings.FilterPolicy.auto(\_:except:)](filterpolicy/auto%28__except_%29.md): The system blocks adult content.
- [WebContentSettings.FilterPolicy.none](filterpolicy/none.md): The policy doesn’t affect any domains.
- [WebContentSettings.FilterPolicy.specific(\_:)](filterpolicy/specific%28__%29.md): The policy blocks the specified domains.

### Comparing policies

- [==(\_:\_:)](filterpolicy/==%28____%29.md): Returns a Boolean value that indicates whether two values are equal.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)

## See Also

### Filtering web domains

- [blockedByFilter](blockedbyfilter-swift.property.md): The current policy for filtering websites.
- [blockedByFilter](blockedbyfilter-swift.type.property.md): A description of the setting that controls which websites a user can access.
