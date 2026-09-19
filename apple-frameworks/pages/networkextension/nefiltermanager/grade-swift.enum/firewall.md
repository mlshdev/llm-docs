> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/networkextension/nefiltermanager/grade-swift.enum/firewall

# NEFilterManager.Grade.firewall (Swift)

**Framework:** Network Extension  
**Kind:** Case  
**Availability:** macOS 10.15+

A grade for filters that act as firewalls, blocking some network traffic.

## Declaration

```swift
case firewall
```

<a id="Discussion"></a>

## Discussion

Firewall grade filters see network traffic before other filter grades.

## See Also

### Grades

- [NEFilterManager.Grade.inspector](inspector.md): A grade for filters that act as inspectors of network traffic.

# NEFilterManagerGradeFirewall (Objective-C)

**Framework:** Network Extension  
**Kind:** Enumeration Case  
**Availability:** macOS 10.15+

A grade for filters that act as firewalls, blocking some network traffic.

## Declaration

```objectivec
NEFilterManagerGradeFirewall
```

<a id="Discussion"></a>

## Discussion

Firewall grade filters see network traffic before other filter grades.

## See Also

### Grades

- [NEFilterManagerGradeInspector](inspector.md): A grade for filters that act as inspectors of network traffic.
