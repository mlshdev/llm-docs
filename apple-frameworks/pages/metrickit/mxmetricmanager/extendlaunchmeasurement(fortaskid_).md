> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metrickit/mxmetricmanager/extendlaunchmeasurement(fortaskid:)](https://developer.apple.com/documentation/metrickit/mxmetricmanager/extendlaunchmeasurement(fortaskid:))

# extendLaunchMeasurement(forTaskID:) (Swift)

**Framework:** MetricKit  
**Kind:** Type Method  
**Availability:** iOS 16.0+ (deprecated in 27.0) · iPadOS 16.0+ (deprecated in 27.0) · Mac Catalyst 16.0+ (deprecated in 27.0) · macOS 13.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0)

Starts to measure an extended launch task with the given task identifier.

> Use [trackLaunchTask(id:onTrackingError:\_:)](../metricmanager/tracklaunchtask%28id_ontrackingerror___%29-48k2s.md) or [trackLaunchTask(id:onTrackingError:\_:)](../metricmanager/tracklaunchtask%28id_ontrackingerror___%29-jnu1.md) instead.

## Declaration

```swift
class func extendLaunchMeasurement(forTaskID taskID: MXLaunchTaskID) throws
```

## Parameters

- `taskID`: The task identifier. Must be a unique, `non-null` string.

<a id="Discussion"></a>

## Discussion

Use this method on the main thread to measure an extended launch task. Your app needs to start the first task before or during [scene(\_:restoreInteractionStateWith:)](../../uikit/uiscenedelegate/scene%28__restoreinteractionstatewith_%29.md), or before the system calls [sceneDidBecomeActive(\_:)](../../uikit/uiscenedelegate/scenedidbecomeactive%28__%29.md) on the first scene to connect, and each task needs to overlap with others.

The maximum number of tasks is 16. The extended launch measurement finishes when all running tasks finish.

## See Also

### Measuring an extended launch

- [finishExtendedLaunchMeasurement(forTaskID:)](finishextendedlaunchmeasurement%28fortaskid_%29.md): Deprecated. Signals the end of an extended launch task.
- [MXLaunchTaskID](../mxlaunchtaskid.md): Deprecated. The task identifier to track launch measurements.

# extendLaunchMeasurementForTaskID:error: (Objective-C)

**Framework:** MetricKit  
**Kind:** Type Method  
**Availability:** iOS 16.0+ (deprecated in 27.0) · iPadOS 16.0+ (deprecated in 27.0) · Mac Catalyst 16.0+ (deprecated in 27.0) · macOS 13.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0)

Starts to measure an extended launch task with the given task identifier.

> Use [trackLaunchTask(id:onTrackingError:\_:)](../metricmanager/tracklaunchtask%28id_ontrackingerror___%29-48k2s.md) or [trackLaunchTask(id:onTrackingError:\_:)](../metricmanager/tracklaunchtask%28id_ontrackingerror___%29-jnu1.md) instead.

## Declaration

```objectivec
+ (BOOL) extendLaunchMeasurementForTaskID:(MXLaunchTaskID) taskID error:(NSError **) error;
```

## Parameters

- `taskID`: The task identifier. Must be a unique, `non-null` string.
- `error`: On output, a pointer to an error object that describes why the method failed, or `nil` if no error occurred. If you are not interested in the error information, pass `nil` for this parameter.

<a id="return-value"></a>

## Return Value

`YES` if the method succeeded, otherwise `NO`.

<a id="Discussion"></a>

## Discussion

Use this method on the main thread to measure an extended launch task. Your app needs to start the first task before or during [scene:restoreInteractionStateWithUserActivity:](../../uikit/uiscenedelegate/scene%28__restoreinteractionstatewith_%29.md), or before the system calls [sceneDidBecomeActive:](../../uikit/uiscenedelegate/scenedidbecomeactive%28__%29.md) on the first scene to connect, and each task needs to overlap with others.

The maximum number of tasks is 16. The extended launch measurement finishes when all running tasks finish.

## See Also

### Measuring an extended launch

- [finishExtendedLaunchMeasurementForTaskID:error:](finishextendedlaunchmeasurement%28fortaskid_%29.md): Deprecated. Signals the end of an extended launch task.
- [MXLaunchTaskID](../mxlaunchtaskid.md): Deprecated. The task identifier to track launch measurements.
