> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/appintents/parametersummarywhencondition/init(_:_:_:_:otherwise:)-2aukt](https://developer.apple.com/documentation/appintents/parametersummarywhencondition/init(_:_:_:_:otherwise:)-2aukt)

# init(\_:\_:\_:\_:otherwise:)

**Framework:** App Intents  
**Kind:** Initializer  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS · watchOS 9.0+

## Declaration

```swift
init<ValueType, Parameter>(_ keyPath: KeyPath<Intent, Parameter>, _ comparisonOperator: ComparableComparisonOperator, _ value: ValueType, @ParameterSummaryBuilder<Intent> _ when: () -> WhenCondition, @ParameterSummaryBuilder<Intent> otherwise: () -> Otherwise) where ValueType : Comparable, ValueType == Parameter.Value, Parameter : AnyIntentValue
```

## See Also

### Creating a conditional statement

- [init(\_:\_:\_:otherwise:)](init%28______otherwise_%29.md)
- [init(\_:\_:\_:\_:otherwise:)](init%28________otherwise_%29-1u184.md)
- [init(\_:\_:\_:\_:otherwise:)](init%28________otherwise_%29-6edqt.md)
- [init(\_:\_:\_:\_:otherwise:)](init%28________otherwise_%29-rfm5.md)
- [init(\_:\_:\_:\_:otherwise:)](init%28________otherwise_%29-3qvla.md)
- [init(\_:identifier:\_:\_:otherwise:)](init%28__identifier_____otherwise_%29-215ub.md)
- [init(\_:identifier:\_:\_:otherwise:)](init%28__identifier_____otherwise_%29-2yug9.md)
- [init(\_:identifier:\_:\_:otherwise:)](init%28__identifier_____otherwise_%29-3xth2.md)
- [init(\_:identifier:\_:\_:otherwise:)](init%28__identifier_____otherwise_%29-4f45j.md)
- [init(\_:identifier:\_:\_:otherwise:)](init%28__identifier_____otherwise_%29-5o5vc.md)
- [init(\_:identifier:\_:\_:otherwise:)](init%28__identifier_____otherwise_%29-7g15l.md)
- [init(\_:identifier:\_:\_:otherwise:)](init%28__identifier_____otherwise_%29-7tayy.md)
- [init(\_:identifier:\_:\_:otherwise:)](init%28__identifier_____otherwise_%29-9qlh.md)
- [init(widgetFamily:\_:\_:otherwise:)](init%28widgetfamily_____otherwise_%29-3fujn.md)
- [init(widgetFamily:\_:\_:otherwise:)](init%28widgetfamily_____otherwise_%29-9l1to.md)
