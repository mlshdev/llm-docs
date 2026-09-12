> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/networkextension/nefiltermanager/grade-swift.property](https://developer.apple.com/documentation/networkextension/nefiltermanager/grade-swift.property)

# grade (Swift)

**Framework:** Network Extension  
**Kind:** Instance Property  
**Availability:** macOS 10.15+

The grade of the filter, which determines when it acts relative to other filters.

## Declaration

```swift
var grade: NEFilterManager.Grade { get set }
```

<a id="Discussion"></a>

## Discussion

The default grade is [NEFilterManager.Grade.firewall](grade-swift.enum/firewall.md).

## See Also

### Prioritizing filters

- [NEFilterManager.Grade](grade-swift.enum.md): A type for the grade or priority of the filter.

# grade (Objective-C)

**Framework:** Network Extension  
**Kind:** Instance Property  
**Availability:** macOS 10.15+

The grade of the filter, which determines when it acts relative to other filters.

## Declaration

```objectivec
@property NEFilterManagerGrade grade;
```

<a id="Discussion"></a>

## Discussion

The default grade is [NEFilterManagerGradeFirewall](grade-swift.enum/firewall.md).

## See Also

### Prioritizing filters

- [NEFilterManagerGrade](grade-swift.enum.md): A type for the grade or priority of the filter.
