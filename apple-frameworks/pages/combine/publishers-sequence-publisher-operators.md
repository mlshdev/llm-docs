> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/combine/publishers-sequence-publisher-operators](https://developer.apple.com/documentation/combine/publishers-sequence-publisher-operators)

# Publisher Operators

**Framework:** Combine  
**Kind:** API Collection

Methods that create downstream publishers or subscribers to act on the elements they receive.

## Topics

### Mapping elements

- [map(\_:)](publishers/sequence/map%28__%29.md): Conforms when `Elements` conforms to `Sequence` and `Failure` conforms to `Error`.
- [scan(\_:\_:)](publishers/sequence/scan%28____%29.md): Conforms when `Elements` conforms to `Sequence` and `Failure` conforms to `Error`.
- [setFailureType(to:)](publishers/sequence/setfailuretype%28to_%29.md): Conforms when `Elements` conforms to `Sequence` and `Failure` conforms to `Error`.
- [replaceNil(with:)](publishers/sequence/replacenil%28with_%29.md): Conforms when `Elements` conforms to `Sequence` and `Failure` conforms to `Error`.

### Filtering elements

- [filter(\_:)](publishers/sequence/filter%28__%29.md): Conforms when `Elements` conforms to `Sequence` and `Failure` conforms to `Error`.
- [compactMap(\_:)](publishers/sequence/compactmap%28__%29.md): Conforms when `Elements` conforms to `Sequence` and `Failure` conforms to `Error`.
- [removeDuplicates()](publishers/sequence/removeduplicates%28%29.md): Conforms when `Elements` conforms to `Sequence`, `Failure` conforms to `Error`, and `Elements.Element` conforms to `Equatable`.

### Reducing elements

- [collect()](publishers/sequence/collect%28%29.md): Conforms when `Elements` conforms to `Sequence` and `Failure` conforms to `Error`.
- [ignoreOutput()](publishers/sequence/ignoreoutput%28%29.md): Conforms when `Elements` conforms to `Sequence` and `Failure` conforms to `Error`.
- [reduce(\_:\_:)](publishers/sequence/reduce%28____%29.md): Conforms when `Elements` conforms to `Sequence` and `Failure` conforms to `Error`.
- [tryReduce(\_:\_:)](publishers/sequence/tryreduce%28____%29.md): Conforms when `Elements` conforms to `Sequence` and `Failure` conforms to `Error`.

### Applying mathematical operations on elements

- [count()](publishers/sequence/count%28%29-5rrw2.md): Conforms when `Elements` conforms to `RandomAccessCollection` and `Failure` is `Never`.
- [count()](publishers/sequence/count%28%29-5hb52.md): Conforms when `Elements` conforms to `RandomAccessCollection` and `Failure` conforms to `Error`.
- [count()](publishers/sequence/count%28%29-b8ct.md): Conforms when `Elements` conforms to `Collection` and `Failure` conforms to `Error`.
- [max()](publishers/sequence/max%28%29.md): Conforms when `Elements` conforms to `Sequence`, `Failure` is `Never`, and `Elements.Element` conforms to `Comparable`.
- [max(by:)](publishers/sequence/max%28by_%29.md): Conforms when `Elements` conforms to `Sequence` and `Failure` is `Never`.
- [min()](publishers/sequence/min%28%29.md): Conforms when `Elements` conforms to `Sequence`, `Failure` is `Never`, and `Elements.Element` conforms to `Comparable`.
- [min(by:)](publishers/sequence/min%28by_%29.md): Conforms when `Elements` conforms to `Sequence` and `Failure` is `Never`.

### Applying matching criteria to elements

- [contains(\_:)](publishers/sequence/contains%28__%29.md): Conforms when `Elements` conforms to `Sequence`, `Failure` conforms to `Error`, and `Elements.Element` conforms to `Equatable`.
- [contains(where:)](publishers/sequence/contains%28where_%29.md): Conforms when `Elements` conforms to `Sequence` and `Failure` conforms to `Error`.
- [tryContains(where:)](publishers/sequence/trycontains%28where_%29.md): Conforms when `Elements` conforms to `Sequence` and `Failure` conforms to `Error`.
- [allSatisfy(\_:)](publishers/sequence/allsatisfy%28__%29.md): Conforms when `Elements` conforms to `Sequence` and `Failure` conforms to `Error`.
- [tryAllSatisfy(\_:)](publishers/sequence/tryallsatisfy%28__%29.md): Conforms when `Elements` conforms to `Sequence` and `Failure` conforms to `Error`.

### Applying sequence operations to elements

- [dropFirst(\_:)](publishers/sequence/dropfirst%28__%29.md): Conforms when `Elements` conforms to `Sequence` and `Failure` conforms to `Error`.
- [drop(while:)](publishers/sequence/drop%28while_%29.md): Conforms when `Elements` conforms to `Sequence` and `Failure` conforms to `Error`.
- [append(\_:)](publishers/sequence/append%28__%29-45rm8.md): Conforms when `Elements` conforms to `RangeReplaceableCollection` and `Failure` conforms to `Error`.
- [append(\_:)](publishers/sequence/append%28__%29-3dj6k.md): Conforms when `Elements` conforms to `RangeReplaceableCollection` and `Failure` conforms to `Error`.
- [append(\_:)](publishers/sequence/append%28__%29-2knh4.md): Conforms when `Elements` conforms to `RangeReplaceableCollection` and `Failure` conforms to `Error`.
- [prepend(\_:)](publishers/sequence/prepend%28__%29-1r564.md): Conforms when `Elements` conforms to `RangeReplaceableCollection` and `Failure` conforms to `Error`.
- [prepend(\_:)](publishers/sequence/prepend%28__%29-71f7p.md): Conforms when `Elements` conforms to `RangeReplaceableCollection` and `Failure` conforms to `Error`.
- [prepend(\_:)](publishers/sequence/prepend%28__%29-2ros1.md): Conforms when `Elements` conforms to `RangeReplaceableCollection` and `Failure` conforms to `Error`.
- [prefix(\_:)](publishers/sequence/prefix%28__%29.md): Conforms when `Elements` conforms to `Sequence` and `Failure` conforms to `Error`.
- [prefix(while:)](publishers/sequence/prefix%28while_%29.md): Conforms when `Elements` conforms to `Sequence` and `Failure` conforms to `Error`.

### Selecting specific elements

- [first()](publishers/sequence/first%28%29.md): Conforms when `Elements` conforms to `Collection` and `Failure` is `Never`.
- [first(where:)](publishers/sequence/first%28where_%29.md): Conforms when `Elements` conforms to `Sequence` and `Failure` is `Never`.
- [last()](publishers/sequence/last%28%29.md): Conforms when `Elements` conforms to `BidirectionalCollection` and `Failure` is `Never`.
- [last(where:)](publishers/sequence/last%28where_%29.md): Conforms when `Elements` conforms to `BidirectionalCollection` and `Failure` is `Never`.
- [output(at:)](publishers/sequence/output%28at_%29-3r7zo.md): Conforms when `Elements` conforms to `Collection` and `Failure` is `Never`.
- [output(at:)](publishers/sequence/output%28at_%29-9kto7.md): Conforms when `Elements` conforms to `RandomAccessCollection` and `Failure` is `Never`.
- [output(in:)](publishers/sequence/output%28in_%29-6g2zc.md): Conforms when `Elements` conforms to `RandomAccessCollection` and `Failure` conforms to `Error`.
- [output(in:)](publishers/sequence/output%28in_%29-8l6yw.md): Conforms when `Elements` conforms to `Collection` and `Failure` conforms to `Error`.
