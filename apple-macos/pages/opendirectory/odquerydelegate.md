> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/opendirectory/odquerydelegate](https://developer.apple.com/documentation/opendirectory/odquerydelegate)

# ODQueryDelegate (Swift)

**Framework:** Open Directory  
**Kind:** Protocol  
**Availability:** Mac Catalyst · macOS

The `ODQueryDelegate` protocol defines methods for receiving results returned from an Open Directory query.

## Declaration

```swift
protocol ODQueryDelegate : NSObjectProtocol
```

## Topics

### Receiving results from a scheduled query

- [query(\_:foundResults:error:)](odquerydelegate/query%28__foundresults_error_%29.md): The delegate method called as results are returned from a query scheduled in a run loop.

## Relationships

### Inherits From

- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)

# ODQueryDelegate (Objective-C)

**Framework:** Open Directory  
**Kind:** Protocol  
**Availability:** Mac Catalyst · macOS

The `ODQueryDelegate` protocol defines methods for receiving results returned from an Open Directory query.

## Declaration

```objectivec
@protocol ODQueryDelegate <NSObject>
```

## Topics

### Receiving results from a scheduled query

- [query:foundResults:error:](odquerydelegate/query%28__foundresults_error_%29.md): The delegate method called as results are returned from a query scheduled in a run loop.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)
