> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/storekit/appstore/ageratingcode](https://developer.apple.com/documentation/storekit/appstore/ageratingcode)

# ageRatingCode

**Framework:** StoreKit  
**Kind:** Type Property  
**Availability:** iOS 26.2+ · iPadOS 26.2+ · Mac Catalyst 26.2+ · macOS 26.2+ · tvOS 26.2+ · visionOS 26.2+ · watchOS 26.2+

The current age rating code for your app.

## Declaration

```swift
static var ageRatingCode: Int? { get async }
```

<a id="return-value"></a>

## Return Value

An integer representing the current age rating code, or `nil` if the age rating is unavailable.

<a id="discussion"></a>

## Discussion

Use this property to fetch the age rating for your app and compare it with the last known age rating to check if it has changed.

The following is an example of getting the age rating for an app:

```swift
func getAgeRatingCode() async -> Int? {
    guard let ageRatingCode = await AppStore.ageRatingCode else {
        print("Age rating code unavailable")
        return nil
    }
    return ageRatingCode
}
```

If your app’s age rating has changed, consider informing parents or guardians by using the [Significant Change API](https://developer.apple.com/documentation/PermissionKit/SignificantAppUpdateTopic).
