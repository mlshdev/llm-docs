> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/networkextension/nefiltermanager/grade-swift.enum/inspector](https://developer.apple.com/documentation/networkextension/nefiltermanager/grade-swift.enum/inspector)

# NEFilterManager.Grade.inspector (Swift)

**Framework:** Network Extension  
**Kind:** Case  
**Availability:** macOS 10.15+

A grade for filters that act as inspectors of network traffic.

## Declaration

```swift
case inspector
```

<a id="Discussion"></a>

## Discussion

Inspector grade filters see network traffic after firewall grade filters.

## See Also

### Grades

- [NEFilterManager.Grade.firewall](firewall.md): A grade for filters that act as firewalls, blocking some network traffic.

# NEFilterManagerGradeInspector (Objective-C)

**Framework:** Network Extension  
**Kind:** Enumeration Case  
**Availability:** macOS 10.15+

A grade for filters that act as inspectors of network traffic.

## Declaration

```objectivec
NEFilterManagerGradeInspector
```

<a id="Discussion"></a>

## Discussion

Inspector grade filters see network traffic after firewall grade filters.

## See Also

### Grades

- [NEFilterManagerGradeFirewall](firewall.md): A grade for filters that act as firewalls, blocking some network traffic.
