> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mapkit/decluttering-a-map-with-mapkit-annotation-clustering](https://developer.apple.com/documentation/mapkit/decluttering-a-map-with-mapkit-annotation-clustering)

# Decluttering a Map with MapKit Annotation Clustering (Swift)

**Framework:** MapKit  
**Kind:** Sample Code  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · Xcode 16.3+

Enhance the readability of a map by replacing overlapping annotations with a clustering annotation view.

<a id="Overview"></a>

## Overview

TANDm is a fictional bike sharing app that uses annotation clustering to provide an uncluttered map. The app shows how MapKit automatically groups two or more annotations into a single annotation when spacing on the map doesn’t permit each annotation to be visible without overlapping. This enhances the readability of the map by replacing overlapping annotations with a clustering annotation view.

<a id="Annotation-Clustering"></a>

### Annotation Clustering

To group annotations into a cluster, set the [clusteringIdentifier](mkannotationview/clusteringidentifier.md) property to the same value on each annotation view in the group. For example, to show overlapping unicycle annotations in a clustering annotation view, TANDm sets `clusteringIdentifier` on each instance of `UnicycleAnnotationView` to `"unicycle"`.

```swift
override init(annotation: MKAnnotation?, reuseIdentifier: String?) {
    super.init(annotation: annotation, reuseIdentifier: reuseIdentifier)
    clusteringIdentifier = "unicycle"
}
```

<a id="Display-Priority"></a>

### Display Priority

To determine how an annotation view behaves when it overlaps another annotation view, set its [displayPriority](mkannotationview/displaypriority.md) property. In the sample app, the map view is likely to hide the unicycle annotation if it overlaps with another annotation because the unicycle annotation view has a display priority of [defaultLow](mkfeaturedisplaypriority/defaultlow.md), while the display priorities for bicycle and tricycle are set to [defaultHigh](mkfeaturedisplaypriority/defaulthigh.md). Here’s an example of setting the display priority while preparing an instance of `BicycleAnnotationView` for reuse:

```swift
override func prepareForDisplay() {
    super.prepareForDisplay()
    displayPriority = .defaultHigh
    markerTintColor = UIColor.bicycleColor
    glyphImage = #imageLiteral(resourceName: "bicycle")
}
```

<a id="Custom-Clustering-Annotation-Views"></a>

### Custom Clustering Annotation Views

Customize the behavior and appearance of a clustering annotation view by subclassing [MKAnnotationView](mkannotationview.md); for instance, to display hints about the annotations within the cluster. TANDm, for example, uses the custom clustering annotation view `ClusterAnnotationView` to show the ratio between bicycles and tricycles at a location.

```swift
override func prepareForDisplay() {
    super.prepareForDisplay()
    
    if let cluster = annotation as? MKClusterAnnotation {
        let totalBikes = cluster.memberAnnotations.count
        
        if count(cycleType: .unicycle) > 0 {
            image = drawUnicycleCount(count: totalBikes)
        } else {
            let tricycleCount = count(cycleType: .tricycle)
            image = drawRatioBicycleToTricycle(tricycleCount, to: totalBikes)
        }
        
        if count(cycleType: .unicycle) > 0 {
            displayPriority = .defaultLow
        } else {
            displayPriority = .defaultHigh
        }
    }
}
```

## See Also

### Grouped annotations

- [MKClusterAnnotation](mkclusterannotation.md): An annotation that groups two or more distinct annotations into a single entity.

# Decluttering a Map with MapKit Annotation Clustering (Objective-C)

**Framework:** MapKit  
**Kind:** Sample Code  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · Xcode 16.3+

Enhance the readability of a map by replacing overlapping annotations with a clustering annotation view.

<a id="Overview"></a>

## Overview

TANDm is a fictional bike sharing app that uses annotation clustering to provide an uncluttered map. The app shows how MapKit automatically groups two or more annotations into a single annotation when spacing on the map doesn’t permit each annotation to be visible without overlapping. This enhances the readability of the map by replacing overlapping annotations with a clustering annotation view.

<a id="Annotation-Clustering"></a>

### Annotation Clustering

To group annotations into a cluster, set the [clusteringIdentifier](mkannotationview/clusteringidentifier.md) property to the same value on each annotation view in the group. For example, to show overlapping unicycle annotations in a clustering annotation view, TANDm sets `clusteringIdentifier` on each instance of `UnicycleAnnotationView` to `"unicycle"`.

```swift
override init(annotation: MKAnnotation?, reuseIdentifier: String?) {
    super.init(annotation: annotation, reuseIdentifier: reuseIdentifier)
    clusteringIdentifier = "unicycle"
}
```

<a id="Display-Priority"></a>

### Display Priority

To determine how an annotation view behaves when it overlaps another annotation view, set its [displayPriority](mkannotationview/displaypriority.md) property. In the sample app, the map view is likely to hide the unicycle annotation if it overlaps with another annotation because the unicycle annotation view has a display priority of [MKFeatureDisplayPriorityDefaultLow](mkfeaturedisplaypriority/defaultlow.md), while the display priorities for bicycle and tricycle are set to [MKFeatureDisplayPriorityDefaultHigh](mkfeaturedisplaypriority/defaulthigh.md). Here’s an example of setting the display priority while preparing an instance of `BicycleAnnotationView` for reuse:

```swift
override func prepareForDisplay() {
    super.prepareForDisplay()
    displayPriority = .defaultHigh
    markerTintColor = UIColor.bicycleColor
    glyphImage = #imageLiteral(resourceName: "bicycle")
}
```

<a id="Custom-Clustering-Annotation-Views"></a>

### Custom Clustering Annotation Views

Customize the behavior and appearance of a clustering annotation view by subclassing [MKAnnotationView](mkannotationview.md); for instance, to display hints about the annotations within the cluster. TANDm, for example, uses the custom clustering annotation view `ClusterAnnotationView` to show the ratio between bicycles and tricycles at a location.

```swift
override func prepareForDisplay() {
    super.prepareForDisplay()
    
    if let cluster = annotation as? MKClusterAnnotation {
        let totalBikes = cluster.memberAnnotations.count
        
        if count(cycleType: .unicycle) > 0 {
            image = drawUnicycleCount(count: totalBikes)
        } else {
            let tricycleCount = count(cycleType: .tricycle)
            image = drawRatioBicycleToTricycle(tricycleCount, to: totalBikes)
        }
        
        if count(cycleType: .unicycle) > 0 {
            displayPriority = .defaultLow
        } else {
            displayPriority = .defaultHigh
        }
    }
}
```

## See Also

### Grouped annotations

- [MKClusterAnnotation](mkclusterannotation.md): An annotation that groups two or more distinct annotations into a single entity.
