> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/networkextension/nefiltermanager/grade-swift.enum](https://developer.apple.com/documentation/networkextension/nefiltermanager/grade-swift.enum)

# NEFilterManager.Grade (Swift)

**Framework:** Network Extension  
**Kind:** Enumeration  
**Availability:** macOS 10.15+

A type for the grade or priority of the filter.

## Declaration

```swift
enum Grade
```

## Topics

### Grades

- [NEFilterManager.Grade.firewall](grade-swift.enum/firewall.md): A grade for filters that act as firewalls, blocking some network traffic.
- [NEFilterManager.Grade.inspector](grade-swift.enum/inspector.md): A grade for filters that act as inspectors of network traffic.

### Initializers

- [init(rawValue:)](grade-swift.enum/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Prioritizing filters

- [grade](grade-swift.property.md): The grade of the filter, which determines when it acts relative to other filters.

# NEFilterManagerGrade (Objective-C)

**Framework:** Network Extension  
**Kind:** Enumeration  
**Availability:** macOS 10.15+

A type for the grade or priority of the filter.

## Declaration

```objectivec
enum NEFilterManagerGrade : NSInteger;
```

## Topics

### Grades

- [NEFilterManagerGradeFirewall](grade-swift.enum/firewall.md): A grade for filters that act as firewalls, blocking some network traffic.
- [NEFilterManagerGradeInspector](grade-swift.enum/inspector.md): A grade for filters that act as inspectors of network traffic.

## See Also

### Prioritizing filters

- [grade](grade-swift.property.md): The grade of the filter, which determines when it acts relative to other filters.
