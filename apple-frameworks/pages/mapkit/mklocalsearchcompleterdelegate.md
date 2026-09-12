> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mapkit/mklocalsearchcompleterdelegate](https://developer.apple.com/documentation/mapkit/mklocalsearchcompleterdelegate)

# MKLocalSearchCompleterDelegate (Swift)

**Framework:** MapKit  
**Kind:** Protocol  
**Availability:** iOS 9.3+ · iPadOS 9.3+ · Mac Catalyst 13.1+ · macOS 10.11.4+ · tvOS 9.2+ · visionOS 1.0+ · watchOS 3.0+

Methods the delegate calls with search completion data.

## Declaration

```swift
protocol MKLocalSearchCompleterDelegate : NSObjectProtocol
```

<a id="overview"></a>

## Overview

You use this protocol when implementing an autocomplete solution for a map in your app. As the user types search terms, use an [MKLocalSearchCompleter](mklocalsearchcompleter.md) object to start searching for valid completions. The delegate you assign to that object needs to conform to this protocol. As it receives completions, the local search completer calls the methods of this protocol to deliver the results.

## Topics

### Getting the search results

- [completerDidUpdateResults(\_:)](mklocalsearchcompleterdelegate/completerdidupdateresults%28__%29.md): Tells the method when the specified search completer updates its array of search completions.
- [completer(\_:didFailWithError:)](mklocalsearchcompleterdelegate/completer%28__didfailwitherror_%29.md): Tells the method when the specified search completer is unable to generate a list of search results.

## Relationships

### Inherits From

- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Receiving the search results

- [delegate](mklocalsearchcompleter/delegate.md): The object that receives the completion results.

# MKLocalSearchCompleterDelegate (Objective-C)

**Framework:** MapKit  
**Kind:** Protocol  
**Availability:** iOS 9.3+ · iPadOS 9.3+ · Mac Catalyst 13.1+ · macOS 10.11.4+ · tvOS 9.2+ · visionOS 1.0+ · watchOS 3.0+

Methods the delegate calls with search completion data.

## Declaration

```objectivec
@protocol MKLocalSearchCompleterDelegate <NSObject>
```

<a id="overview"></a>

## Overview

You use this protocol when implementing an autocomplete solution for a map in your app. As the user types search terms, use an [MKLocalSearchCompleter](mklocalsearchcompleter.md) object to start searching for valid completions. The delegate you assign to that object needs to conform to this protocol. As it receives completions, the local search completer calls the methods of this protocol to deliver the results.

## Topics

### Getting the search results

- [completerDidUpdateResults:](mklocalsearchcompleterdelegate/completerdidupdateresults%28__%29.md): Tells the method when the specified search completer updates its array of search completions.
- [completer:didFailWithError:](mklocalsearchcompleterdelegate/completer%28__didfailwitherror_%29.md): Tells the method when the specified search completer is unable to generate a list of search results.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobjectprotocol.md)

## See Also

### Receiving the search results

- [delegate](mklocalsearchcompleter/delegate.md): The object that receives the completion results.
