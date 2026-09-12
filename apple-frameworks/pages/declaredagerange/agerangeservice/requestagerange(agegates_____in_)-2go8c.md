> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/declaredagerange/agerangeservice/requestagerange(agegates:_:_:in:)-2go8c](https://developer.apple.com/documentation/declaredagerange/agerangeservice/requestagerange(agegates:_:_:in:)-2go8c)

# requestAgeRange(ageGates:\_:\_:in:)

**Framework:** Declared Age Range  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+

Requests an age range for the person signed in to iCloud on the device.

## Declaration

```swift
func requestAgeRange(ageGates threshold1: Int, _ threshold2: Int? = nil, _ threshold3: Int? = nil, in viewController: UIViewController) async throws -> AgeRangeService.Response
```

## Parameters

- `threshold1`: The primary age threshold for your app.
- `threshold2`: An optional second age threshold that creates an additional age range.
- `threshold3`: An optional third age threshold that creates a final age range.
- `viewController`: The view controller that anchors the system UI presentation. The system UI appears modally over this view controller.

<a id="return-value"></a>

## Return Value

An [AgeRangeService.Response](response.md) value containing either the person’s age range or an indication that the person declined to share their age range.

<a id="discussion"></a>

## Discussion

Use [requestAgeRange(ageGates:\_:\_:in:)](requestagerange%28agegates_____in_%29-2go8c.md) to implement age-appropriate experiences in your app. People who meet the minimum age requirements that you specify can access age-appropriate features and content.

This method presents a system-provided interface that explains what information a person shares with your app and allows people to make an informed decision about providing their age range information to your app.

The system may return age ranges that override the age gates you specify based on the person’s location and applicable regulations. When local regulations require specific age gates, the returned age range reflects regulatory requirements rather than the bounds of your age gates.

> **Throws**

> An [AgeRangeService.Error](error.md) when the request fails.

## See Also

### Getting the age range

- [AgeRangeService.AgeRangeDeclaration](agerangedeclaration.md): Constants that describe how an adult, parent, or guardian set the age range.
- [AgeRangeService.AgeRange](agerange.md): Information about a person’s age range based on their response to your age range request.
- [requestAgeRange(ageGates:\_:\_:in:)](requestagerange%28agegates_____in_%29-4yo3r.md): Requests an age range for the person logged onto iCloud on the device.
- [AgeRangeService.Response](response.md): A response indicating whether a person shared their age range or declined to share it.
- [AgeRangeService.ParentalControls](parentalcontrols.md): An option set to define parental controls enabled and shared as a part of age range declaration.
