> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/declaredagerange/declaredagerangeaction/callasfunction(agegates:_:_:)](https://developer.apple.com/documentation/declaredagerange/declaredagerangeaction/callasfunction(agegates:_:_:))

# callAsFunction(ageGates:\_:\_:)

**Framework:** Declared Age Range  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+

Returns a response indicating whether the person shared their age range.

## Declaration

```swift
func callAsFunction(ageGates threshold1: Int, _ threshold2: Int? = nil, _ threshold3: Int? = nil) async throws -> AgeRangeService.Response
```

## Parameters

- `threshold1`: The primary age threshold for your app.
- `threshold2`: An optional second age threshold that creates an additional age range.
- `threshold3`: An optional third age threshold that creates a final age range.

<a id="return-value"></a>

## Return Value

A response indicating whether the person declared their age range. If the person shared their age range, the system also returns the age range.

<a id="discussion"></a>

## Discussion

Regional requirements may override your age gates based on the person’s location.

Use [requestAgeRange](https://developer.apple.com/documentation/swiftui/environmentvalues/requestagerange) with SwiftUI environment values to request age ranges in response to user interactions:

```swift
struct ContentView: View {
    @Environment(\.requestAgeRange) var requestAgeRange

    var body: some View {
        Button("Check Age Range") {
            Task {
                do {
                    let response = try await requestAgeRange(ageGates: 13, 16, 18)
                    switch response {
                    case let .sharing(ageRange):
                        // Person shared their age range.
                        break
.                    case .declinedSharing:
                        // In regulated regions, the system automatically provides the person's age range — the person can't decline sharing.
                        break
                    }
                } catch {
                    // Handle error.
                }
            }
        }
    }
}
```

> **Throws**

> An error if the request fails.
