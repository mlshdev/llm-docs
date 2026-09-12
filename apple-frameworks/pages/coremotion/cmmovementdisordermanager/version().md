> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremotion/cmmovementdisordermanager/version()](https://developer.apple.com/documentation/coremotion/cmmovementdisordermanager/version())

# version() (Swift)

**Framework:** Core Motion  
**Kind:** Type Method  
**Availability:** watchOS 5.0+

Returns a string that describes the movement disorder algorithm’s current version.

## Declaration

```swift
class func version() -> String?
```

## Mentioned In

- [Movement disorder algorithm changelog](../movement-disorder-algorithm-changelog.md)

<a id="Discussion"></a>

## Discussion

Use this method to determine the algorithm used by the movement disorder manager. If the current device supports gathering movement disorder data, this method returns a string with the version number in `<major>.<minor>.<fix>` format. It returns `nil` anytime [isAvailable()](isavailable%28%29.md) returns [false](https://developer.apple.com/documentation/swift/false). For information about the current version, see [Movement disorder algorithm changelog](../movement-disorder-algorithm-changelog.md).

> **Important**

>  Your app uses the version of the algorithm provided by the current operating system running on the device. This means the algorithm your app uses might change, without requiring you to rebuild and resubmit your app.

To set up tests that notify you when the version changes, create a unit test that checks the current version against the expected value. You can then use continuous integration to automatically monitor this value with each new release.

```swift
func testForVersionChange() throws {
    let expectedVersion = "1.0.0"
    let currentVersion = CMMovementDisorderManager.version()
    XCTAssertEqual(expectedVersion, currentVersion, "*** The version has changes to \(String(describing: currentVersion)). ***")
}
```

## See Also

### Checking Availablility

- [isAvailable()](isavailable%28%29.md): A Boolean value indicating whether the current device supports the movement disorder manager.
- [authorizationStatus()](authorizationstatus%28%29.md): A value indicating whether the user has authorized the app to monitor and query for movement disorder data.

# version (Objective-C)

**Framework:** Core Motion  
**Kind:** Type Method  
**Availability:** watchOS 5.0+

Returns a string that describes the movement disorder algorithm’s current version.

## Declaration

```objectivec
+ (NSString *) version;
```

## Mentioned In

- [Movement disorder algorithm changelog](../movement-disorder-algorithm-changelog.md)

<a id="Discussion"></a>

## Discussion

Use this method to determine the algorithm used by the movement disorder manager. If the current device supports gathering movement disorder data, this method returns a string with the version number in `<major>.<minor>.<fix>` format. It returns `nil` anytime [isAvailable](isavailable%28%29.md) returns [false](https://developer.apple.com/documentation/swift/false). For information about the current version, see [Movement disorder algorithm changelog](../movement-disorder-algorithm-changelog.md).

> **Important**

>  Your app uses the version of the algorithm provided by the current operating system running on the device. This means the algorithm your app uses might change, without requiring you to rebuild and resubmit your app.

To set up tests that notify you when the version changes, create a unit test that checks the current version against the expected value. You can then use continuous integration to automatically monitor this value with each new release.

```swift
func testForVersionChange() throws {
    let expectedVersion = "1.0.0"
    let currentVersion = CMMovementDisorderManager.version()
    XCTAssertEqual(expectedVersion, currentVersion, "*** The version has changes to \(String(describing: currentVersion)). ***")
}
```

## See Also

### Checking Availablility

- [isAvailable](isavailable%28%29.md): A Boolean value indicating whether the current device supports the movement disorder manager.
- [authorizationStatus](authorizationstatus%28%29.md): A value indicating whether the user has authorized the app to monitor and query for movement disorder data.
