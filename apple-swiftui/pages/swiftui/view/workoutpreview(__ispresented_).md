> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/view/workoutpreview(_:ispresented:)](https://developer.apple.com/documentation/swiftui/view/workoutpreview(_:ispresented:))

# workoutPreview(\_:isPresented:)

**Framework:** WorkoutKit  
**Kind:** Instance Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · macOS 15.0+ · watchOS 11.0+

Presents a preview of the workout contents as a modal sheet

## Declaration

```swift
nonisolated func workoutPreview(_ workout: WorkoutPlan, isPresented: Binding<Bool>) -> some View

```

## Parameters

- `workout`: The `WorkoutContainer` the preview displays
- `isPresented`: A binding to a Boolean value that determines whether to present the preview

<a id="discussion"></a>

## Discussion

```swift
struct WorkoutPreviewer: View {
    let workout: WorkoutPlan
    @State var presented: Bool = false
    var body: some View {
        Button {
            isPresented = true
        } label: {
            WorkoutContainerView(workout)
        }
        .workoutPreview(workout, isPresented: $presented)
    }
}
```

## See Also

### Accessing health data

- [healthDataAccessRequest(store:objectType:predicate:trigger:completion:)](healthdataaccessrequest%28store_objecttype_predicate_trigger_completion_%29.md): Asynchronously requests permission to read a data type that requires per-object authorization (such as vision prescriptions).
- [healthDataAccessRequest(store:readTypes:trigger:completion:)](healthdataaccessrequest%28store_readtypes_trigger_completion_%29.md): Requests permission to read the specified HealthKit data types.
- [healthDataAccessRequest(store:shareTypes:readTypes:trigger:completion:)](healthdataaccessrequest%28store_sharetypes_readtypes_trigger_completion_%29.md): Requests permission to save and read the specified HealthKit data types.
