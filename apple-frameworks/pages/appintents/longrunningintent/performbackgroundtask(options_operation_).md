> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/appintents/longrunningintent/performbackgroundtask(options:operation:)](https://developer.apple.com/documentation/appintents/longrunningintent/performbackgroundtask(options:operation:))

# performBackgroundTask(options:operation:)

**Framework:** App Intents  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

Runs an operation in the background with an extended amount of time.

## Declaration

```swift
@discardableResult func performBackgroundTask<T>(options: LongRunningTaskOptions = [], operation: @escaping () async throws -> T) async throws -> T
```

## Parameters

- `options`: Additional options to configure the runtime behavior. For example, you might use this parameter to tell the system that your task requires GPU resources. The default value for this parameter is an empty set.
- `operation`: The closure to run in the background. Use this closure to specify the code for your app intent’s task. The closure takes no parameters and returns a type that you specify.

<a id="return-value"></a>

## Return Value

The value you return from the `operation` closure.

<a id="discussion"></a>

## Discussion

> **Throws**

> Throws an error if the operation fails or the system can’t run the operation.

Use this method to wrap long-running code in your app intent’s [perform()](../appintent/perform%28%29.md) method. This method automatically extends the amount of time your code has to run in the background past the standard 30-second limit present on some platforms. You don’t have to start a separate background task.

While your operation runs, provide regular progress updates using the [progress](../progressreportingintent/progress.md) property of the [ProgressReportingIntent](../progressreportingintent.md) protocol. If you don’t update this property regularly, the system can cancel the background runtime extension and end your task prematurely.

Live Activities displays the progress of your app intent’s task using information it receives automatically from this method. Live Activities displays the values of the [localizedDescription](../../foundation/progress/localizeddescription.md) and [localizedAdditionalDescription](../../foundation/progress/localizedadditionaldescription.md) properties as the title and subtitle of your task. It also displays a progress bar, which it configures using the values in the [completedUnitCount](../../foundation/progress/completedunitcount.md) and [totalUnitCount](../../foundation/progress/totalunitcount.md) properties.

The following example shows the [perform()](../appintent/perform%28%29.md) method of an app intent, which uses this method to extend the background runtime of the task. The method implementation uploads a file in chunks and updates progress values after each chunk.

```swift
func perform() async throws -> some IntentResult & ReturnsValue<String> {
    let result = try await performBackgroundTask {
        progress.totalUnitCount = 100
        progress.localizedDescription = "Uploading file"

        for chunk in 0..<100 {
            try Task.checkCancellation()
            await uploadChunk(chunk)
            progress.completedUnitCount = Int64(chunk + 1)
            progress.localizedAdditionalDescription = "\(chunk + 1)% complete"
        }
        return "Upload complete!"
    }

    return .result(value: result)
}
```

## See Also

### Performing background tasks

- [performBackgroundTask(options:operation:onCancel:)](performbackgroundtask%28options_operation_oncancel_%29.md): Runs an operation in the background and provides a way to cancel the operation before it finishes.
- [LongRunningTaskOptions](../longrunningtaskoptions.md): Options for configuring long-running tasks.
