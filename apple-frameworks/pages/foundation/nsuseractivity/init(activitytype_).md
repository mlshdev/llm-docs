> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsuseractivity/init(activitytype:)](https://developer.apple.com/documentation/foundation/nsuseractivity/init(activitytype:))

# init(activityType:) (Swift)

**Framework:** Foundation  
**Kind:** Initializer  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Creates a user activity object with the specified type.

## Declaration

```swift
init(activityType: String)
```

## Parameters

- `activityType`: The type of the activity. The value is a developer-defined string in reverse-DNS format by convention, for example, `com.myCompany.myEditor.editing`.

<a id="return-value"></a>

## Return Value

An [NSUserActivity](../nsuseractivity.md) object.

## See Also

### Related Documentation

- [Handoff Programming Guide](https://developer.apple.com/library/archive/documentation/UserExperience/Conceptual/Handoff/HandoffFundamentals/HandoffFundamentals.html#//apple_ref/doc/uid/TP40014338)

# initWithActivityType: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Creates a user activity object with the specified type.

## Declaration

```objectivec
- (instancetype) initWithActivityType:(NSString *) activityType;
```

## Parameters

- `activityType`: The type of the activity. The value is a developer-defined string in reverse-DNS format by convention, for example, `com.myCompany.myEditor.editing`.

<a id="return-value"></a>

## Return Value

An [NSUserActivity](../nsuseractivity.md) object.

## See Also

### Related Documentation

- [Handoff Programming Guide](https://developer.apple.com/library/archive/documentation/UserExperience/Conceptual/Handoff/HandoffFundamentals/HandoffFundamentals.html#//apple_ref/doc/uid/TP40014338)
