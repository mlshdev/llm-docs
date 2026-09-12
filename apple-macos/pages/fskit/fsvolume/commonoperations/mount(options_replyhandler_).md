> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/fskit/fsvolume/commonoperations/mount(options:replyhandler:)](https://developer.apple.com/documentation/fskit/fsvolume/commonoperations/mount(options:replyhandler:))

# mount(options:replyHandler:) (Swift)

**Framework:** FSKit  
**Kind:** Instance Method  
**Availability:** macOS 15.4+

Mounts this volume, using the specified options.

## Declaration

```swift
func mount(options: FSTaskOptions, replyHandler reply: @escaping @Sendable ((any Error)?) -> Void)
```

```swift
func mount(options: FSTaskOptions) async throws
```

## Parameters

- `options`: Options to apply to the mount. These can include security-scoped file paths. There are no defined options currently.
- `reply`: A block or closure to indicate success or failure. If mounting fails, pass an error as the one parameter to the reply handler. If mounting succeeds, pass `nil`. For an `async` Swift implementation, there’s no reply handler; simply return normally.

<a id="discussion"></a>

## Discussion

FSKit calls this method as a signal that some process is trying to mount this volume. Your file system receives a call to `activate(options:)` prior to receiving any mount calls.

# mountWithOptions:replyHandler: (Objective-C)

**Framework:** FSKit  
**Kind:** Instance Method  
**Availability:** macOS 15.4+

Mounts this volume, using the specified options.

## Declaration

```objectivec
- (void) mountWithOptions:(FSTaskOptions *) options replyHandler:(void (^)(NSError *error)) reply;
```

## Parameters

- `options`: Options to apply to the mount. These can include security-scoped file paths. There are no defined options currently.
- `reply`: A block or closure to indicate success or failure. If mounting fails, pass an error as the one parameter to the reply handler. If mounting succeeds, pass `nil`. For an `async` Swift implementation, there’s no reply handler; simply return normally.

<a id="discussion"></a>

## Discussion

FSKit calls this method as a signal that some process is trying to mount this volume. Your file system receives a call to `activate(options:)` prior to receiving any mount calls.
