> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremotion/cmmovementdisordermanager/monitorkinesiasexpirationdate()](https://developer.apple.com/documentation/coremotion/cmmovementdisordermanager/monitorkinesiasexpirationdate())

# monitorKinesiasExpirationDate() (Swift)

**Framework:** Core Motion  
**Kind:** Instance Method  
**Availability:** watchOS 5.0+

Returns the expiration date for the most recent monitoring period.

## Declaration

```swift
func monitorKinesiasExpirationDate() -> Date?
```

<a id="return-value"></a>

## Return Value

The current expiration date, or `nil` if you have not yet begun monitoring.

<a id="Discussion"></a>

## Discussion

This date is set when you call the [monitorKinesias(forDuration:)](monitorkinesias%28forduration_%29.md) method. You can extend the date by calling [monitorKinesias(forDuration:)](monitorkinesias%28forduration_%29.md) again; however, you can’t shorten the monitoring duration.

You can use the expiration date to determine whether you are currently monitoring the user.

```swift
guard let experiationDate = movementDisorderManager.monitorKinesiasExpirationDate() else {
    // You haven't started monitoring the user.
    return
}

if experiationDate > Date() {
    // Currently monitoring the user.
} else {
    // The monitoring period has ended.
}
```

## See Also

### Recording Movement Disorders

- [monitorKinesias(forDuration:)](monitorkinesias%28forduration_%29.md): Calculate and store tremor and dyskinetic symptom results for the duration of the specified time interval.

# monitorKinesiasExpirationDate (Objective-C)

**Framework:** Core Motion  
**Kind:** Instance Method  
**Availability:** watchOS 5.0+

Returns the expiration date for the most recent monitoring period.

## Declaration

```objectivec
- (NSDate *) monitorKinesiasExpirationDate;
```

<a id="return-value"></a>

## Return Value

The current expiration date, or `nil` if you have not yet begun monitoring.

<a id="Discussion"></a>

## Discussion

This date is set when you call the [monitorKinesiasForDuration:](monitorkinesias%28forduration_%29.md) method. You can extend the date by calling [monitorKinesiasForDuration:](monitorkinesias%28forduration_%29.md) again; however, you can’t shorten the monitoring duration.

You can use the expiration date to determine whether you are currently monitoring the user.

```swift
guard let experiationDate = movementDisorderManager.monitorKinesiasExpirationDate() else {
    // You haven't started monitoring the user.
    return
}

if experiationDate > Date() {
    // Currently monitoring the user.
} else {
    // The monitoring period has ended.
}
```

## See Also

### Recording Movement Disorders

- [monitorKinesiasForDuration:](monitorkinesias%28forduration_%29.md): Calculate and store tremor and dyskinetic symptom results for the duration of the specified time interval.
