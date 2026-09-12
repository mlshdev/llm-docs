> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/combine/publisher](https://developer.apple.com/documentation/combine/publisher)

# Publisher

**Framework:** Combine  
**Kind:** Protocol  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Declares that a type can transmit a sequence of values over time.

## Declaration

```swift
protocol Publisher<Output, Failure>
```

## Mentioned In

- [Processing Published Elements with Subscribers](processing-published-elements-with-subscribers.md)
- [Receiving and Handling Events with Combine](receiving-and-handling-events-with-combine.md)
- [Using Combine for Your App’s Asynchronous Code](using-combine-for-your-app-s-asynchronous-code.md)

<a id="overview"></a>

## Overview

A publisher delivers elements to one or more [Subscriber](subscriber.md) instances. The subscriber’s [Input](subscriber/input.md) and [Failure](subscriber/failure.md) associated types must match the [Output](publisher/output.md) and [Failure](publisher/failure.md) types declared by the publisher. The publisher implements the [receive(subscriber:)](publisher/receive%28subscriber_%29.md)method to accept a subscriber.

After this, the publisher can call the following methods on the subscriber:

- [receive(subscription:)](subscriber/receive%28subscription_%29.md): Acknowledges the subscribe request and returns a [Subscription](subscription.md) instance. The subscriber uses the subscription to demand elements from the publisher and can use it to cancel publishing.
- [receive(\_:)](subscriber/receive%28__%29.md): Delivers one element from the publisher to the subscriber.
- [receive(completion:)](subscriber/receive%28completion_%29.md): Informs the subscriber that publishing has ended, either normally or with an error.

Every `Publisher` must adhere to this contract for downstream subscribers to function correctly.

> **Tip**

> A Combine publisher fills a role similar to, but distinct from, the [AsyncSequence](https://developer.apple.com/documentation/swift/asyncsequence) in the Swift standard library. A `Publisher` and an `AsyncSequence` both produce elements over time. However, the pull model in Combine uses a [Subscriber](subscriber.md) to request elements from a publisher, while Swift concurrency uses the `for`-`await`-`in` syntax to iterate over elements published by an `AsyncSequence`. Both APIs offer methods to modify the sequence by mapping or filtering elements, while only Combine provides time-based operations like [debounce(for:scheduler:options:)](publisher/debounce%28for_scheduler_options_%29.md) and [throttle(for:scheduler:latest:)](publisher/throttle%28for_scheduler_latest_%29.md), and combining operations like [merge(with:)](publisher/merge%28with_%29-7fk3a.md) and [combineLatest(\_:\_:)](publisher/combinelatest%28____%29-1n30g.md). To bridge the two approaches, the property [values](publisher/values-1dm9r.md) exposes a publisher’s elements as an `AsyncSequence`, allowing you to iterate over them with `for`-`await`-`in` rather than attaching a [Subscriber](subscriber.md).

<a id="Using-operators"></a>

### Using operators

Extensions on `Publisher` define a wide variety of *operators* that you compose to create sophisticated event-processing chains. Each operator returns a type that implements the [Publisher](publisher.md) protocol Most of these types exist as extensions on the [Publishers](publishers.md) enumeration. For example, the [map(\_:)](publisher/map%28__%29-99evh.md) operator returns an instance of [Publishers.Map](publishers/map.md).

Use operators to assemble a chain of republishers, optionally ending with a subscriber, that processes elements produced by upstream publishers. Each operator creates and configures an instance of a [Publisher](publisher.md) or [Subscriber](subscriber.md), and subscribes it to the publisher that you call the method on.

In the following example, a sequence publisher emits the integers 1, 2, 3, 4, and 5. A [filter(\_:)](publisher/filter%28__%29.md) operator creates a [Publishers.Filter](publishers/filter.md) publisher to only republish even values. A second operator creates a [Subscribers.Sink](subscribers/sink.md) subscriber to print out each value received. The sink subscriber automatically subscribes to the filter publisher, at which point the filter publisher subscribes to its upstream publisher, the sequence publisher.

```swift
let cancellable = [1, 2, 3, 4, 5].publisher
    .filter {
        $0 % 2 == 0
    }
    .sink {
        print ("Even number: \($0)")
    }
// Prints:
// Even number: 2
// Even number: 4
```

<a id="Creating-Your-Own-Publishers"></a>

## Creating Your Own Publishers

Rather than implementing the `Publisher` protocol yourself, you can create your own publisher by using one of several types provided by the Combine framework:

- Use a concrete subclass of [Subject](subject.md), such as [PassthroughSubject](passthroughsubject.md), to publish values on-demand by calling its [send(\_:)](subject/send%28__%29.md) method.
- Use a [CurrentValueSubject](currentvaluesubject.md) to publish whenever you update the subject’s underlying value.
- Add the `@Published` annotation to a property of one of your own types. In doing so, the property gains a publisher that emits an event whenever the property’s value changes. See the [Published](published.md) type for an example of this approach.

## Topics

### Declaring supporting types

- [Output](publisher/output.md): The kind of values published by this publisher.
- [Failure](publisher/failure.md): The kind of errors this publisher might publish.

### Working with subscribers

- [receive(subscriber:)](publisher/receive%28subscriber_%29.md): Attaches the specified subscriber to this publisher.
- [subscribe(\_:)](publisher/subscribe%28__%29-4u8kn.md): Attaches the specified subscriber to this publisher.
- [subscribe(\_:)](publisher/subscribe%28__%29-3fk20.md): Attaches the specified subject to this publisher.

### Mapping elements

- [map(\_:)](publisher/map%28__%29-99evh.md): Transforms all elements from the upstream publisher with a provided closure.
- [tryMap(\_:)](publisher/trymap%28__%29.md): Transforms all elements from the upstream publisher with a provided error-throwing closure.
- [mapError(\_:)](publisher/maperror%28__%29.md): Converts any failure from the upstream publisher into a new error.
- [replaceNil(with:)](publisher/replacenil%28with_%29.md): Replaces nil elements in the stream with the provided element.
- [scan(\_:\_:)](publisher/scan%28____%29.md): Transforms elements from the upstream publisher by providing the current element to a closure along with the last value returned by the closure.
- [tryScan(\_:\_:)](publisher/tryscan%28____%29.md): Transforms elements from the upstream publisher by providing the current element to an error-throwing closure along with the last value returned by the closure.
- [setFailureType(to:)](publisher/setfailuretype%28to_%29.md): Conforms when `Failure` is `Never`. Changes the failure type declared by the upstream publisher.

### Filtering elements

- [filter(\_:)](publisher/filter%28__%29.md): Republishes all elements that match a provided closure.
- [tryFilter(\_:)](publisher/tryfilter%28__%29.md): Republishes all elements that match a provided error-throwing closure.
- [compactMap(\_:)](publisher/compactmap%28__%29.md): Calls a closure with each received element and publishes any returned optional that has a value.
- [tryCompactMap(\_:)](publisher/trycompactmap%28__%29.md): Calls an error-throwing closure with each received element and publishes any returned optional that has a value.
- [removeDuplicates()](publisher/removeduplicates%28%29.md): Conforms when `Output` conforms to `Equatable`. Publishes only elements that don’t match the previous element.
- [removeDuplicates(by:)](publisher/removeduplicates%28by_%29.md): Publishes only elements that don’t match the previous element, as evaluated by a provided closure.
- [tryRemoveDuplicates(by:)](publisher/tryremoveduplicates%28by_%29.md): Publishes only elements that don’t match the previous element, as evaluated by a provided error-throwing closure.
- [replaceEmpty(with:)](publisher/replaceempty%28with_%29.md): Replaces an empty stream with the provided element.
- [replaceError(with:)](publisher/replaceerror%28with_%29.md): Replaces any errors in the stream with the provided element.

### Reducing elements

- [collect()](publisher/collect%28%29.md): Collects all received elements, and emits a single array of the collection when the upstream publisher finishes.
- [collect(\_:)](publisher/collect%28__%29.md): Collects up to the specified number of elements, and then emits a single array of the collection.
- [collect(\_:options:)](publisher/collect%28__options_%29.md): Collects elements by a given time-grouping strategy, and emits a single array of the collection.
- [Publishers.TimeGroupingStrategy](publishers/timegroupingstrategy.md): A strategy for collecting received elements.
- [ignoreOutput()](publisher/ignoreoutput%28%29.md): Ignores all upstream elements, but passes along the upstream publisher’s completion state (finished or failed).
- [reduce(\_:\_:)](publisher/reduce%28____%29.md): Applies a closure that collects each element of a stream and publishes a final result upon completion.
- [tryReduce(\_:\_:)](publisher/tryreduce%28____%29.md): Applies an error-throwing closure that collects each element of a stream and publishes a final result upon completion.

### Applying mathematical operations on elements

- [count()](publisher/count%28%29.md): Publishes the number of elements received from the upstream publisher.
- [max()](publisher/max%28%29.md): Conforms when `Output` conforms to `Comparable`. Publishes the maximum value received from the upstream publisher, after it finishes.
- [max(by:)](publisher/max%28by_%29.md): Publishes the maximum value received from the upstream publisher, using the provided ordering closure.
- [tryMax(by:)](publisher/trymax%28by_%29.md): Publishes the maximum value received from the upstream publisher, using the provided error-throwing closure to order the items.
- [min()](publisher/min%28%29.md): Conforms when `Output` conforms to `Comparable`. Publishes the minimum value received from the upstream publisher, after it finishes.
- [min(by:)](publisher/min%28by_%29.md): Publishes the minimum value received from the upstream publisher, after it finishes.
- [tryMin(by:)](publisher/trymin%28by_%29.md): Publishes the minimum value received from the upstream publisher, using the provided error-throwing closure to order the items.

### Applying matching criteria to elements

- [contains(\_:)](publisher/contains%28__%29.md): Conforms when `Output` conforms to `Equatable`. Publishes a Boolean value upon receiving an element equal to the argument.
- [contains(where:)](publisher/contains%28where_%29.md): Publishes a Boolean value upon receiving an element that satisfies the predicate closure.
- [tryContains(where:)](publisher/trycontains%28where_%29.md): Publishes a Boolean value upon receiving an element that satisfies the throwing predicate closure.
- [allSatisfy(\_:)](publisher/allsatisfy%28__%29.md): Publishes a single Boolean value that indicates whether all received elements pass a given predicate.
- [tryAllSatisfy(\_:)](publisher/tryallsatisfy%28__%29.md): Publishes a single Boolean value that indicates whether all received elements pass a given error-throwing predicate.

### Applying sequence operations to elements

- [drop(untilOutputFrom:)](publisher/drop%28untiloutputfrom_%29.md): Ignores elements from the upstream publisher until it receives an element from a second publisher.
- [dropFirst(\_:)](publisher/dropfirst%28__%29.md): Omits the specified number of elements before republishing subsequent elements.
- [drop(while:)](publisher/drop%28while_%29.md): Omits elements from the upstream publisher until a given closure returns false, before republishing all remaining elements.
- [tryDrop(while:)](publisher/trydrop%28while_%29.md): Omits elements from the upstream publisher until an error-throwing closure returns false, before republishing all remaining elements.
- [append(\_:)](publisher/append%28__%29-1qb8d.md): Appends a publisher’s output with the specified elements.
- [append(\_:)](publisher/append%28__%29-69sdn.md): Appends a publisher’s output with the specified sequence.
- [append(\_:)](publisher/append%28__%29-5yh02.md): Appends the output of this publisher with the elements emitted by the given publisher.
- [prepend(\_:)](publisher/prepend%28__%29-7wk5l.md): Prefixes a publisher’s output with the specified values.
- [prepend(\_:)](publisher/prepend%28__%29-v9sb.md): Prefixes a publisher’s output with the specified sequence.
- [prepend(\_:)](publisher/prepend%28__%29-5dj9c.md): Prefixes the output of this publisher with the elements emitted by the given publisher.
- [prefix(\_:)](publisher/prefix%28__%29.md): Republishes elements up to the specified maximum count.
- [prefix(while:)](publisher/prefix%28while_%29.md): Republishes elements while a predicate closure indicates publishing should continue.
- [tryPrefix(while:)](publisher/tryprefix%28while_%29.md): Republishes elements while an error-throwing predicate closure indicates publishing should continue.
- [prefix(untilOutputFrom:)](publisher/prefix%28untiloutputfrom_%29.md): Republishes elements until another publisher emits an element.

### Selecting specific elements

- [first()](publisher/first%28%29.md): Publishes the first element of a stream, then finishes.
- [first(where:)](publisher/first%28where_%29.md): Publishes the first element of a stream to satisfy a predicate closure, then finishes normally.
- [tryFirst(where:)](publisher/tryfirst%28where_%29.md): Publishes the first element of a stream to satisfy a throwing predicate closure, then finishes normally.
- [last()](publisher/last%28%29.md): Publishes the last element of a stream, after the stream finishes.
- [last(where:)](publisher/last%28where_%29.md): Publishes the last element of a stream that satisfies a predicate closure, after upstream finishes.
- [tryLast(where:)](publisher/trylast%28where_%29.md): Publishes the last element of a stream that satisfies an error-throwing predicate closure, after the stream finishes.
- [output(at:)](publisher/output%28at_%29.md): Publishes a specific element, indicated by its index in the sequence of published elements.
- [output(in:)](publisher/output%28in_%29.md): Publishes elements specified by their range in the sequence of published elements.

### Collecting and republishing the latest elements from multiple publishers

- [combineLatest(\_:\_:)](publisher/combinelatest%28____%29-1n30g.md): Subscribes to an additional publisher and invokes a closure upon receiving output from either publisher.
- [combineLatest(\_:)](publisher/combinelatest%28__%29.md): Subscribes to an additional publisher and publishes a tuple upon receiving output from either publisher.
- [combineLatest(\_:\_:\_:)](publisher/combinelatest%28______%29-6ekpz.md): Subscribes to two additional publishers and invokes a closure upon receiving output from any of the publishers.
- [combineLatest(\_:\_:)](publisher/combinelatest%28____%29-5crqg.md): Subscribes to two additional publishers and publishes a tuple upon receiving output from any of the publishers.
- [combineLatest(\_:\_:\_:\_:)](publisher/combinelatest%28________%29.md): Subscribes to three additional publishers and invokes a closure upon receiving output from any of the publishers.
- [combineLatest(\_:\_:\_:)](publisher/combinelatest%28______%29-48buc.md): Subscribes to three additional publishers and publishes a tuple upon receiving output from any of the publishers.

### Republishing elements from multiple publishers as an interleaved stream

- [merge(with:)](publisher/merge%28with_%29-7fk3a.md): Combines elements from this publisher with those from another publisher of the same type, delivering an interleaved sequence of elements.
- [merge(with:)](publisher/merge%28with_%29-7qt71.md): Combines elements from this publisher with those from another publisher, delivering an interleaved sequence of elements.
- [merge(with:\_:)](publisher/merge%28with___%29.md): Combines elements from this publisher with those from two other publishers, delivering an interleaved sequence of elements.
- [merge(with:\_:\_:)](publisher/merge%28with_____%29.md): Combines elements from this publisher with those from three other publishers, delivering an interleaved sequence of elements.
- [merge(with:\_:\_:\_:)](publisher/merge%28with_______%29.md): Combines elements from this publisher with those from four other publishers, delivering an interleaved sequence of elements.
- [merge(with:\_:\_:\_:\_:)](publisher/merge%28with_________%29.md): Combines elements from this publisher with those from five other publishers, delivering an interleaved sequence of elements.
- [merge(with:\_:\_:\_:\_:\_:)](publisher/merge%28with___________%29.md): Combines elements from this publisher with those from six other publishers, delivering an interleaved sequence of elements.
- [merge(with:\_:\_:\_:\_:\_:\_:)](publisher/merge%28with_____________%29.md): Combines elements from this publisher with those from seven other publishers, delivering an interleaved sequence of elements.

### Collecting and republishing the oldest unconsumed elements from multiple publishers

- [zip(\_:)](publisher/zip%28__%29.md): Combines elements from another publisher and deliver pairs of elements as tuples.
- [zip(\_:\_:)](publisher/zip%28____%29-4xn21.md): Combines elements from another publisher and delivers a transformed output.
- [zip(\_:\_:)](publisher/zip%28____%29-8d7k7.md): Combines elements from two other publishers and delivers groups of elements as tuples.
- [zip(\_:\_:\_:)](publisher/zip%28______%29-9yqi1.md): Combines elements from two other publishers and delivers a transformed output.
- [zip(\_:\_:\_:)](publisher/zip%28______%29-16rcy.md): Combines elements from three other publishers and delivers groups of elements as tuples.
- [zip(\_:\_:\_:\_:)](publisher/zip%28________%29.md): Combines elements from three other publishers and delivers a transformed output.

### Republishing elements by subscribing to new publishers

- [flatMap(maxPublishers:\_:)](publisher/flatmap%28maxpublishers___%29-3k7z5.md): Transforms all elements from an upstream publisher into a new publisher up to a maximum number of publishers you specify.
- [flatMap(maxPublishers:\_:)](publisher/flatmap%28maxpublishers___%29-qxf.md): Conforms when `Failure` is `Never`. Transforms all elements from an upstream publisher into a new publisher up to a maximum number of publishers you specify.
- [flatMap(maxPublishers:\_:)](publisher/flatmap%28maxpublishers___%29-hyb0.md): Conforms when `Failure` is `Never`. Transforms all elements from an upstream publisher into a new publisher up to a maximum number of publishers you specify.
- [flatMap(maxPublishers:\_:)](publisher/flatmap%28maxpublishers___%29-4of8w.md): Transforms all elements from an upstream publisher into a new publisher up to a maximum number of publishers you specify.
- [switchToLatest()](publisher/switchtolatest%28%29-453ht.md): Conforms when `Failure` is `Self.Output.Failure` and `Output` conforms to `Publisher`. Republishes elements sent by the most recently received publisher.
- [switchToLatest()](publisher/switchtolatest%28%29-1c51y.md): Conforms when `Failure` is `Never` and `Output` conforms to `Publisher`. Republishes elements sent by the most recently received publisher.
- [switchToLatest()](publisher/switchtolatest%28%29-20v3t.md): Conforms when `Output` conforms to `Publisher` and `Output.Failure` is `Never`. Republishes elements sent by the most recently received publisher.
- [switchToLatest()](publisher/switchtolatest%28%29-9eb3r.md): Conforms when `Failure` is `Never`, `Output` conforms to `Publisher`, and `Output.Failure` is `Never`. Republishes elements sent by the most recently received publisher.

### Handling errors

- [assertNoFailure(\_:file:line:)](publisher/assertnofailure%28__file_line_%29.md): Raises a fatal error when its upstream publisher fails, and otherwise republishes all received input.
- [catch(\_:)](publisher/catch%28__%29.md): Handles errors from an upstream publisher by replacing it with another publisher.
- [tryCatch(\_:)](publisher/trycatch%28__%29.md): Handles errors from an upstream publisher by either replacing it with another publisher or throwing a new error.
- [retry(\_:)](publisher/retry%28__%29.md): Attempts to recreate a failed subscription with the upstream publisher up to the number of times you specify.

### Controlling timing

- [measureInterval(using:options:)](publisher/measureinterval%28using_options_%29.md): Measures and emits the time interval between events received from an upstream publisher.
- [debounce(for:scheduler:options:)](publisher/debounce%28for_scheduler_options_%29.md): Publishes elements only after a specified time interval elapses between events.
- [delay(for:tolerance:scheduler:options:)](publisher/delay%28for_tolerance_scheduler_options_%29.md): Delays delivery of all output to the downstream receiver by a specified amount of time on a particular scheduler.
- [throttle(for:scheduler:latest:)](publisher/throttle%28for_scheduler_latest_%29.md): Publishes either the most-recent or first element published by the upstream publisher in the specified time interval.
- [timeout(\_:scheduler:options:customError:)](publisher/timeout%28__scheduler_options_customerror_%29.md): Terminates publishing if the upstream publisher exceeds the specified time interval without producing an element.

### Encoding and decoding

- [encode(encoder:)](publisher/encode%28encoder_%29.md): Conforms when `Output` conforms to `Encodable`. Encodes the output from upstream using a specified encoder.
- [decode(type:decoder:)](publisher/decode%28type_decoder_%29.md): Decodes the output from the upstream using a specified decoder.

### Identifying properties with key paths

- [map(\_:)](publisher/map%28__%29-6sm0a.md): Publishes the value of a key path.
- [map(\_:\_:)](publisher/map%28____%29.md): Publishes the values of two key paths as a tuple.
- [map(\_:\_:\_:)](publisher/map%28______%29.md): Publishes the values of three key paths as a tuple.

### Working with multiple subscribers

- [multicast(\_:)](publisher/multicast%28__%29.md): Applies a closure to create a subject that delivers elements to subscribers.
- [multicast(subject:)](publisher/multicast%28subject_%29.md): Provides a subject to deliver elements to multiple subscribers.
- [share()](publisher/share%28%29.md): Shares the output of an upstream publisher with multiple subscribers.

### Buffering elements

- [buffer(size:prefetch:whenFull:)](publisher/buffer%28size_prefetch_whenfull_%29.md): Buffers elements received from an upstream publisher.
- [Publishers.PrefetchStrategy](publishers/prefetchstrategy.md): A strategy for filling a buffer.
- [Publishers.BufferingStrategy](publishers/bufferingstrategy.md): A strategy that handles exhaustion of a buffer’s capacity.

### Performing type erasure

- [eraseToAnyPublisher()](publisher/erasetoanypublisher%28%29.md): Wraps this publisher with a type eraser.

### Specifying schedulers

- [subscribe(on:options:)](publisher/subscribe%28on_options_%29.md): Specifies the scheduler on which to perform subscribe, cancel, and request operations.
- [receive(on:options:)](publisher/receive%28on_options_%29.md): Specifies the scheduler on which to receive elements from the publisher.

### Adding explicit connectability

- [makeConnectable()](publisher/makeconnectable%28%29.md): Conforms when `Failure` is `Never`. Creates a connectable wrapper around the publisher.

### Connecting simple subscribers

- [assign(to:on:)](publisher/assign%28to_on_%29.md): Conforms when `Failure` is `Never`. Assigns each element from a publisher to a property on an object.
- [assign(to:)](publisher/assign%28to_%29.md): Conforms when `Failure` is `Never`. Republishes elements received from a publisher, by assigning them to a property marked as a publisher.
- [sink(receiveCompletion:receiveValue:)](publisher/sink%28receivecompletion_receivevalue_%29.md): Attaches a subscriber with closure-based behavior.
- [sink(receiveValue:)](publisher/sink%28receivevalue_%29.md): Conforms when `Failure` is `Never`. Attaches a subscriber with closure-based behavior to a publisher that never fails.

### Accessing elements asynchronously

- [values](publisher/values-1dm9r.md): Conforms when `Failure` is `Never`. The elements produced by the publisher, as an asynchronous sequence.
- [values](publisher/values-v7nz.md): The elements produced by the publisher, as a throwing asynchronous sequence.

### Debugging

- [breakpoint(receiveSubscription:receiveOutput:receiveCompletion:)](publisher/breakpoint%28receivesubscription_receiveoutput_receivecompletion_%29.md): Raises a debugger signal when a provided closure needs to stop the process in the debugger.
- [breakpointOnError()](publisher/breakpointonerror%28%29.md): Raises a debugger signal upon receiving a failure.
- [handleEvents(receiveSubscription:receiveOutput:receiveCompletion:receiveCancel:receiveRequest:)](publisher/handleevents%28receivesubscription_receiveoutput_receivecompletion_receivecancel_receiverequest_%29.md): Performs the specified closures when publisher events occur.
- [print(\_:to:)](publisher/print%28__to_%29.md): Prints log messages for all publishing events.

## Relationships

### Inherited By

- [ConnectablePublisher](connectablepublisher.md)
- [Subject](subject.md)

### Conforming Types

- [AnyPublisher](anypublisher.md)
- [CurrentValueSubject](currentvaluesubject.md)
- [Deferred](deferred.md)
- [Empty](empty.md)
- [Fail](fail.md)
- [Future](future.md)
- [Just](just.md)
- [ObservableObjectPublisher](observableobjectpublisher.md)
- [PassthroughSubject](passthroughsubject.md)
- [Published.Publisher](published/publisher.md)
- [Publishers.AllSatisfy](publishers/allsatisfy.md)
- [Publishers.AssertNoFailure](publishers/assertnofailure.md)
- [Publishers.Autoconnect](publishers/autoconnect.md)
- [Publishers.Breakpoint](publishers/breakpoint.md)
- [Publishers.Buffer](publishers/buffer.md)
- [Publishers.Catch](publishers/catch.md)
- [Publishers.Collect](publishers/collect.md)
- [Publishers.CollectByCount](publishers/collectbycount.md)
- [Publishers.CollectByTime](publishers/collectbytime.md)
- [Publishers.CombineLatest](publishers/combinelatest.md)
- [Publishers.CombineLatest3](publishers/combinelatest3.md)
- [Publishers.CombineLatest4](publishers/combinelatest4.md)
- [Publishers.CompactMap](publishers/compactmap.md)
- [Publishers.Comparison](publishers/comparison.md)
- [Publishers.Concatenate](publishers/concatenate.md)
- [Publishers.Contains](publishers/contains.md)
- [Publishers.ContainsWhere](publishers/containswhere.md)
- [Publishers.Count](publishers/count.md)
- [Publishers.Debounce](publishers/debounce.md)
- [Publishers.Decode](publishers/decode.md)
- [Publishers.Delay](publishers/delay.md)
- [Publishers.Drop](publishers/drop.md)
- [Publishers.DropUntilOutput](publishers/dropuntiloutput.md)
- [Publishers.DropWhile](publishers/dropwhile.md)
- [Publishers.Encode](publishers/encode.md)
- [Publishers.Filter](publishers/filter.md)
- [Publishers.First](publishers/first.md)
- [Publishers.FirstWhere](publishers/firstwhere.md)
- [Publishers.FlatMap](publishers/flatmap.md)
- [Publishers.HandleEvents](publishers/handleevents.md)
- [Publishers.IgnoreOutput](publishers/ignoreoutput.md)
- [Publishers.Last](publishers/last.md)
- [Publishers.LastWhere](publishers/lastwhere.md)
- [Publishers.MakeConnectable](publishers/makeconnectable.md)
- [Publishers.Map](publishers/map.md)
- [Publishers.MapError](publishers/maperror.md)
- [Publishers.MapKeyPath](publishers/mapkeypath.md)
- [Publishers.MapKeyPath2](publishers/mapkeypath2.md)
- [Publishers.MapKeyPath3](publishers/mapkeypath3.md)
- [Publishers.MeasureInterval](publishers/measureinterval.md)
- [Publishers.Merge](publishers/merge.md)
- [Publishers.Merge3](publishers/merge3.md)
- [Publishers.Merge4](publishers/merge4.md)
- [Publishers.Merge5](publishers/merge5.md)
- [Publishers.Merge6](publishers/merge6.md)
- [Publishers.Merge7](publishers/merge7.md)
- [Publishers.Merge8](publishers/merge8.md)
- [Publishers.MergeMany](publishers/mergemany.md)
- [Publishers.Multicast](publishers/multicast.md)
- [Publishers.Output](publishers/output.md)
- [Publishers.PrefixUntilOutput](publishers/prefixuntiloutput.md)
- [Publishers.PrefixWhile](publishers/prefixwhile.md)
- [Publishers.Print](publishers/print.md)
- [Publishers.ReceiveOn](publishers/receiveon.md)
- [Publishers.Reduce](publishers/reduce.md)
- [Publishers.RemoveDuplicates](publishers/removeduplicates.md)
- [Publishers.ReplaceEmpty](publishers/replaceempty.md)
- [Publishers.ReplaceError](publishers/replaceerror.md)
- [Publishers.Retry](publishers/retry.md)
- [Publishers.Scan](publishers/scan.md)
- [Publishers.Sequence](publishers/sequence.md)
- [Publishers.SetFailureType](publishers/setfailuretype.md)
- [Publishers.Share](publishers/share.md)
- [Publishers.SubscribeOn](publishers/subscribeon.md)
- [Publishers.SwitchToLatest](publishers/switchtolatest.md)
- [Publishers.Throttle](publishers/throttle.md)
- [Publishers.Timeout](publishers/timeout.md)
- [Publishers.TryAllSatisfy](publishers/tryallsatisfy.md)
- [Publishers.TryCatch](publishers/trycatch.md)
- [Publishers.TryCompactMap](publishers/trycompactmap.md)
- [Publishers.TryComparison](publishers/trycomparison.md)
- [Publishers.TryContainsWhere](publishers/trycontainswhere.md)
- [Publishers.TryDropWhile](publishers/trydropwhile.md)
- [Publishers.TryFilter](publishers/tryfilter.md)
- [Publishers.TryFirstWhere](publishers/tryfirstwhere.md)
- [Publishers.TryLastWhere](publishers/trylastwhere.md)
- [Publishers.TryMap](publishers/trymap.md)
- [Publishers.TryPrefixWhile](publishers/tryprefixwhile.md)
- [Publishers.TryReduce](publishers/tryreduce.md)
- [Publishers.TryRemoveDuplicates](publishers/tryremoveduplicates.md)
- [Publishers.TryScan](publishers/tryscan.md)
- [Publishers.Zip](publishers/zip.md)
- [Publishers.Zip3](publishers/zip3.md)
- [Publishers.Zip4](publishers/zip4.md)
- [Record](record.md)

## See Also

### Publishers

- [Publishers](publishers.md): A namespace for types that serve as publishers.
- [AnyPublisher](anypublisher.md): Conforms when `Output` conforms to `Copyable`, `Output` conforms to `Escapable`, and `Failure` conforms to `Error`. A publisher that performs type erasure by wrapping another publisher.
- [Published](published.md): A type that publishes a property marked with an attribute.
- [Cancellable](cancellable.md): A protocol indicating that an activity or action supports cancellation.
- [AnyCancellable](anycancellable.md): A type-erasing cancellable object that executes a provided closure when canceled.
