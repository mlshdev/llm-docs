> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/fskit/fsmanageableresourcemaintenanceoperations/startcheck(task:options:)](https://developer.apple.com/documentation/fskit/fsmanageableresourcemaintenanceoperations/startcheck(task:options:))

# startCheck(task:options:) (Swift)

**Framework:** FSKit  
**Kind:** Instance Method  
**Availability:** macOS 15.4+

Starts checking the file system with the given options.

## Declaration

```swift
func startCheck(task: FSTask, options: FSTaskOptions) throws -> Progress
```

## Parameters

- `task`: A task object you use to communicate back to the client.
- `options`: Options for performing the check.

<a id="return-value"></a>

## Return Value

An [Progress](https://developer.apple.com/documentation/foundation/progress) object that you use to update progress as the check operation progresses. Return `nil` if starting the file system check encountered an error.

# startCheckWithTask:options:error: (Objective-C)

**Framework:** FSKit  
**Kind:** Instance Method  
**Availability:** macOS 15.4+

Starts checking the file system with the given options.

## Declaration

```objectivec
- (NSProgress *) startCheckWithTask:(FSTask *) task options:(FSTaskOptions *) options error:(NSError **) error;
```

## Parameters

- `task`: A task object you use to communicate back to the client.
- `options`: Options for performing the check.
- `error`: In Objective-C, a pointer to an [NSError](https://developer.apple.com/documentation/foundation/nserror). Populate this with any error that occurs when starting the check. In Swift, throw an [Error](https://developer.apple.com/documentation/swift/error) instead.

<a id="return-value"></a>

## Return Value

An [NSProgress](https://developer.apple.com/documentation/foundation/progress) object that you use to update progress as the check operation progresses. Return `nil` if starting the file system check encountered an error.
