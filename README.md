# h5-previewer

## install

```shell
yarn add h5-previewer
```

## useage

```jsx
<Previewer width={width} height={height} mode={mode} rotate={rotate}>
  <iframe
    style={{
      width: '100%',
      height: '100%',
      border: 0,
    }}
    src="https://www.itsnicethat.com/"
  />
</Previewer>
```

notice. you can set anything as children, not iframe only.