> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/backgroundtasks/bgcontinuedprocessingtaskrequest/init(identifier:title:subtitle:)](https://developer.apple.com/documentation/backgroundtasks/bgcontinuedprocessingtaskrequest/init(identifier:title:subtitle:))

# init(identifier:title:subtitle:) (Swift)

**Framework:** Background Tasks  
**Kind:** Initializer  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+

Creates an instance on behalf of the currently foregrounded app.

## Declaration

```swift
init(identifier: String, title: String, subtitle: String)
```

## Parameters

- `identifier`: The task identifier.
- `title`: The localized title displayed to a person before the task begins running.
- `subtitle`: The localized subtitle displayed to a person before the task begins running.

<a id="Discussion"></a>

## Discussion

Apps and their extensions need to use this method to initialize any tasks due to the underlying association to the currently foregrounded app. Note that [earliestBeginDate](../bgtaskrequest/earliestbegindate.md) is ignored by the scheduler in favor of `NSDate.now`.

The identifier must leverage a base wildcard notation, where the prefix of the identifier must at least contain the bundle ID of the submitting application, followed by optional semantic context, and finally ending with `.*`. An example: `<MainBundle>.<SemanticContext>.*` transforms to `com.foo.MyApplication.continuedProcessingTask.*`. Thus, a submitted identifier is of the form `com.foo.MyApplication.continuedProcessingTask.HD830D`.

> **Warning**

>  Successful creation of this object does not guarantee successful submission to the scheduler.

# initWithIdentifier:title:subtitle: (Objective-C)

**Framework:** Background Tasks  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+

Creates an instance on behalf of the currently foregrounded app.

## Declaration

```objectivec
- (instancetype) initWithIdentifier:(NSString *) identifier title:(NSString *) title subtitle:(NSString *) subtitle;
```

## Parameters

- `identifier`: The task identifier.
- `title`: The localized title displayed to a person before the task begins running.
- `subtitle`: The localized subtitle displayed to a person before the task begins running.

<a id="Discussion"></a>

## Discussion

Apps and their extensions need to use this method to initialize any tasks due to the underlying association to the currently foregrounded app. Note that [earliestBeginDate](../bgtaskrequest/earliestbegindate.md) is ignored by the scheduler in favor of `NSDate.now`.

The identifier must leverage a base wildcard notation, where the prefix of the identifier must at least contain the bundle ID of the submitting application, followed by optional semantic context, and finally ending with `.*`. An example: `<MainBundle>.<SemanticContext>.*` transforms to `com.foo.MyApplication.continuedProcessingTask.*`. Thus, a submitted identifier is of the form `com.foo.MyApplication.continuedProcessingTask.HD830D`.

> **Warning**

>  Successful creation of this object does not guarantee successful submission to the scheduler.
